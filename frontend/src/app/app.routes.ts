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
  { path: "users", component: UsersComponent,
    children: [
      { path: "", component: UsersListComponent },
      { path: "view/:id", component: UsersViewComponent },
      { path: "edit/:id", component: UsersEditComponent }
    ]
  },
  { path: "posts", component: PostsComponent,
    children: [
      { path: "", component: PostsListComponent },
      { path: "view/:id", component: PostsViewComponent },
      { path: "edit/:id", component: PostsEditComponent }
    ]
  },
  // { path: "posts/view/:id", component: PostsViewComponent },
  // { path: "posts/edit/", component: PostsEditComponent },
  { path: '**', redirectTo: '' }
];
