import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsViewComponent } from './pages/posts/posts-view/posts-view.component';
import { PostsEditComponent } from './pages/posts/posts-edit/posts-edit.component';
import { PostsListComponent } from './pages/posts/posts-list/posts-list.component';
import { PostsWallComponent } from './pages/wall/posts/posts-wall/posts-wall.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "users", component: UsersComponent },
  { path: "posts", component: PostsComponent,
    children: [
      { path: '', component: PostsListComponent },
      { path: 'view/:id', component: PostsViewComponent },
      { path: 'edit', component: PostsEditComponent }, //create
      { path: 'edit/:id', component: PostsEditComponent }, //edit
    ],
  },
  { path: 'post-wall', component: PostsWallComponent },
  { path: '**', redirectTo: '' },
];
