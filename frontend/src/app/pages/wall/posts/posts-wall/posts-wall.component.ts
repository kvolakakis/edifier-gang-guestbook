import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../../../posts/posts-list/post-card/post-card.component';
import { PostModel } from '../../../../global/models/post.model';
import { PostsService } from '../../../../global/services/posts.service';

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

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      this.displayedPosts.push(new PostModel());
    }

    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data;

      this.AssignTestValues(this.posts);
      this.GetTopPosts(this.posts);
      this.DisplayPosts(this.posts, 4);

      this.UpdateData();
    });
  }

  UpdateData() {
    setInterval(() => {
      this.GetTopPosts(this.posts);
      this.DisplayPosts(this.posts, 4);
    }, 15000);
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

  GetTopPosts(posts: PostModel[]) {
    //sort posts according to likes
    posts.sort((a, b) => b.likes.length - a.likes.length);

    this.topThreePosts.push(posts[0]);
    this.topThreePosts.push(posts[1]);
    this.topThreePosts.push(posts[2]);
  }

  DisplayPosts(posts: PostModel[], numOfPosts: number) {
    let positions = this.SelectRandomPostsForDisplay(posts, numOfPosts);
    this.displayedPosts = [];

    for (let i = 0; i < numOfPosts; i++) {
      //if there exist less than the desired posts to display, create an undefined post
      if (posts.length - 3 <= i) {
        this.displayedPosts.push(new PostModel());
      } else {
        this.displayedPosts.push(posts[positions[i]]);
      }
    }
  }

  SelectRandomPostsForDisplay(posts: PostModel[], numOfPosts: number) {
    let selectedPositions: number[] = [];

    for (let i = 0; i < numOfPosts; i++) {
      if (posts.length > i) {
        let position = this.GetRandomNumber(
          posts.length,
          selectedPositions.concat([0, 1, 2])
        );
        selectedPositions.push(position);
      }
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
