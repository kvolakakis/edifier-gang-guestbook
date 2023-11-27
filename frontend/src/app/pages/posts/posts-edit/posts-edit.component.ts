import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModel } from '../../../global/models/post.model';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../../global/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './posts-edit.component.html',
  styleUrl: './posts-edit.component.scss'
})
export class PostsEditComponent {
  public post!: PostModel;
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(){
    this.post = new PostModel();
  }

  createPost(){
    this.post.user = "Incognito, Inc.";
    this.post.likes = [];
    this.postsService.createPost(this.post).subscribe((data: any) => {
      this.router.navigateByUrl('/posts');
      // console.log(data);
    });
  }
}
