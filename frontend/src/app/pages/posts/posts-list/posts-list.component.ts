import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../../global/services/posts.service';
import { PostModel } from '../../../global/models/post.model';
import { PostCardComponent } from './post-card/post-card.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent {
  public posts: PostModel[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(){
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

}
