import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from '../../global/services/users.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() public activeOption: string = 'browse';
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
