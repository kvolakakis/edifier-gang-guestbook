import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../global/services/users.service';
import { MenuComponent } from '../../shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../../global/models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  currentUser: string | null = null;
  username: string = '';
  password: string = '';
  user: UserModel = new UserModel();
  mode: string = '';
  errorMessage: string = '';
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  async login() {
    try {
      this.errorMessage = '';
      if (!this.username || !this.password) return;
      this.user.username = this.username;
      this.user.password = this.password;
      this.usersService.login(this.user).then((data: any) => {
        this.getCurrentUser();
      }).catch((e: any) => {
        this.errorMessage = e.error.error;
      });
    } catch (e: any) {
    }
  }

  async register() {
    this.errorMessage = '';
    if (!this.username || !this.password) return;
    this.user.username = this.username;
    this.user.password = this.password;
    this.usersService.createUser(this.user).subscribe({
      next: (data: any) => {
        this.currentUser = data.username;
        this.login();
      },
      error: (e: any) => {
        this.errorMessage = e.error.error;
      }
    });
  }

  logout() {
    this.usersService.logout();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = this.usersService.getCurrentUser();
  }

  setMode(mode: string) {
    this.username = '';
    this.password = '';
    this.user = new UserModel();
    this.mode = mode;
  }

}
