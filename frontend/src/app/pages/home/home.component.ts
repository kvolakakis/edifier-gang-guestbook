import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../shared/menu/menu.component';
import { UsersService } from '../../global/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public currentUser: string | null = null;
  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    this.currentUser = this.usersService.getCurrentUser();
  }

  public goto(option: string){
    let newRoute: string = '';
    switch(option){
      case 'browse':
        newRoute = '/posts';
        break;
      case 'create':
        newRoute = '/posts/edit';
        break;
      case 'home':
        newRoute = '/';
        break;
      case 'user':
        newRoute = '/users';
        break;
    }
    this.router.navigateByUrl(newRoute);
  }
}
