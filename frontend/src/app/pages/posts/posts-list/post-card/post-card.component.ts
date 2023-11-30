import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModel } from '../../../../global/models/post.model';
import { FilesService } from '../../../../global/services/files.service';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  @Input() post: PostModel | undefined;
  liked: boolean = false;
  dialogClicked: boolean = false;
  constructor(private filesService: FilesService) {}

  getImageURL(filepath: string) {
    return this.filesService.getFileURL(filepath);
  }
}
