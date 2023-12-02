import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModel } from '../../../../global/models/post.model';
import { FilesService } from '../../../../global/services/files.service';
import { PostsService } from '../../../../global/services/posts.service';
import { UsersService } from '../../../../global/services/users.service';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  @Input() post: PostModel | undefined;
  liked: boolean = false;
  dialogClicked: boolean = false;
  currentUser: string | null = null;
  @Input() minHeight: boolean = false;
  constructor(private filesService: FilesService, private postsService: PostsService, private usersService: UsersService) {}

  ngOnInit() {
    console.log(this.minHeight);
    this.currentUser = this.usersService.getCurrentUser();
    if(this.currentUser)
      this.liked = !!this.post?.likes.includes(this.currentUser || '');
  }

  getImageURL(filepath: string) {
    return this.filesService.getFileURL(filepath);
  }

  like() {
    if (!this.post) return;
    if(!this.currentUser) return;
    this.post?.likes.push(this.currentUser);
    this.updatePost();
  }

  unlike() {
    if (!this.post) return;
    if(!this.currentUser) return;
    this.post.likes = this.post?.likes.filter((like) => like !== this.currentUser);
    this.updatePost();
  }

  updatePost() {
    if (!this.post) return;
    this.postsService.updatePost(this.post).subscribe((data: any) => {
      this.liked = !!this.post?.likes.includes(this.currentUser || '');
    });
  }

}
