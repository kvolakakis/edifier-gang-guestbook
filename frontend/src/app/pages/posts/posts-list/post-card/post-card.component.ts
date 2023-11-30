import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModel } from '../../../../global/models/post.model';

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
}
