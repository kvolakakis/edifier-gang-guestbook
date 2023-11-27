import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersViewComponent } from './pages/users/users-view/users-view.component';
import { UsersEditComponent } from './pages/users/users-edit/users-edit.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsViewComponent } from './pages/posts/posts-view/posts-view.component';
import { PostsEditComponent } from './pages/posts/posts-edit/posts-edit.component';
import { PostsListComponent } from './pages/posts/posts-list/posts-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "users", component: UsersListComponent },
  { path: "users/view/:id", component: UsersViewComponent },
  { path: "users/edit/:id", component: UsersEditComponent },
  { path: "posts", component: PostsListComponent },
  { path: "posts/view/:id", component: PostsViewComponent },
  { path: "posts/edit/:id", component: PostsEditComponent },
  { path: '**', redirectTo: '' }
];
