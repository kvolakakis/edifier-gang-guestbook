import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../../../posts/posts-list/post-card/post-card.component';
import { PostModel } from '../../../../global/models/post.model';
import { PostsService } from '../../../../global/services/posts.service';
import { SocketService } from '../../../../global/services/socket.service';

@Component({
  selector: 'app-posts-wall',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './posts-wall.component.html',
  styleUrl: './posts-wall.component.scss',
})
export class PostsWallComponent {
  public posts: PostModel[] = [];
  public topThreePosts: PostModel[] = [];
  public displayedPosts: PostModel[] = [];

  constructor(
    private postsService: PostsService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    for (let i = 0; i < 8; i++) {
      // this.displayedPosts.push(new PostModel());
    }

    this.getAllPosts();

    this.UpdateData();
    this.socketService.receivePostsUpdated().subscribe((data: any) => {
      this.getAllPosts();
      this.GetTopPosts();
    });
  }

  getAllPosts() {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data;
      this.DisplayPosts(this.posts, 9);
    });
  }

  UpdateData() {
    setInterval(() => {
      this.DisplayPosts(this.posts, 9);
    }, 2000);
  }

  AssignTestValues(posts: PostModel[]) {
    //Assign random number of likes
    for (let i = 0; i < posts.length; i++) {
      let numOfLikes = Math.random() * 100;

      for (let j = 0; j < numOfLikes; j++) {
        posts[i].likes.push(j.toString());
      }
    }
  }

  GetTopPosts() {
    this.topThreePosts = [];
    this.postsService.getTopPosts().subscribe((data: any) => {
      this.topThreePosts = data;
    });
  }

  DisplayPosts(posts: PostModel[], numOfPosts: number) {

    let positions = this.SelectRandomPostsForDisplay(posts, numOfPosts);
    this.displayedPosts = [];

    for (let i = 0; i < numOfPosts; i++) {
      //if there exist less than the desired posts to display, create an undefined post
      if (posts.length - 3 <= i) {
        // this.displayedPosts.push(new PostModel());
      } else {
        this.displayedPosts.push(posts[positions[i]]);
      }
    }
  }

  SelectRandomPostsForDisplay(posts: PostModel[], numOfPosts: number) {
    let selectedPositions: number[] = [];

    if (numOfPosts > posts.length - 3) numOfPosts = posts.length - 3;

    for (let i = 0; i < numOfPosts; i++) {
      let position = this.GetRandomNumber(
        posts.length,
        selectedPositions.concat([])
      );
      selectedPositions.push(position);
    }

    return selectedPositions;
  }

  GetRandomNumber(max: number, excludeNumbers: number[]): number {
    let randomInteger: number;

    do {
      // Generate a random number between 0 (inclusive) and 1 (exclusive)
      const randomNumber = Math.random();

      // Scale the random number to the desired range
      const scaledNumber = randomNumber * max;

      // Convert the scaled number to an integer
      randomInteger = Math.floor(scaledNumber);

      // Repeat the process if the random number is in the exclusion array
    } while (excludeNumbers.includes(randomInteger));

    return randomInteger;
  }
}
