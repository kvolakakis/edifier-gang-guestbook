import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModel } from '../../../global/models/post.model';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../../global/services/posts.service';
import { Router } from '@angular/router';
import { FilesService } from '../../../global/services/files.service';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { UsersService } from '../../../global/services/users.service';

@Component({
  selector: 'app-posts-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent],
  templateUrl: './posts-edit.component.html',
  styleUrl: './posts-edit.component.scss'
})
export class PostsEditComponent {
  public post!: PostModel;
  public currentUser: string | null = null;
  private possibleDescriptions: string[] = [
    "Upload an image you would not want your mother to see",
    "Upload an image you would not want your father to see",
    "Upload an image you would not want your boss to see",
    "Upload an image you would not want your children to see",
    "Upload an image you would not want your friends to see",
    "Upload an image that would make your mother proud",
    "Upload an image that would make your father proud",
    "Upload an image that would make your boss proud",
    "Upload an image that would make your friends proud",
    "Upload an image that would make your children proud",
    "Upload an image that will make you rich",
    "Upload an image that will make you famous",
    "Upload an image that will make you happy",
    "Upload an image that will tell a story without words",
    "Upload an image that will make you laugh",
    "Upload an image that will make you (or others) cry",
  ];
  public currentDescription: string = "";
  constructor(private postsService: PostsService, private filesService: FilesService, private router: Router, private usersService: UsersService) { }

  ngOnInit(){
    this.post = new PostModel();
    this.currentUser = this.usersService.getCurrentUser();
    this.currentDescription = this.getRandomDescription();
  }


  createPost(){
    if(!this.currentUser) return;
    this.post.createdBy = this.currentUser;
    this.post.likes = [];
    this.postsService.createPost(this.post).subscribe((data: any) => {
      this.router.navigateByUrl('/posts');
    });
  }

  onFileSelected(event: any) {
    this.post.files = [];
    this.filesService.createFile(event.target.files[0]).subscribe((data: any) => {
      this.post.files[0] = data;
    });
  }

  getImageURL(filepath: string){
    return this.filesService.getFileURL(filepath);
  }

  removeImage(){
    this.post.files = [];
  }

  getRandomDescription(){
    return this.possibleDescriptions[Math.floor(Math.random() * this.possibleDescriptions.length)];
  }
}
