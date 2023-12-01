import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../global/services/users.service';
import { firstValueFrom } from 'rxjs';
import { UserModel } from '../../global/models/user.model';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  currentUser: string | null = null;
  constructor(private usersService: UsersService) { }

  ngOnInit(){
    this.getCurrentUser();
  }

  async login(){
    this.usersService.login({username: 'lalali'}).then((data: any) => {
      console.log(data);
      this.getCurrentUser();
    });
  }

  logout(){
    this.usersService.logout();
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.currentUser = this.usersService.getCurrentUser();
  }


}
