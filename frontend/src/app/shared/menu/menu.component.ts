import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public activeOption: string = 'browse';

  constructor(private router: Router) { }

  public setActiveOption(option: string){
    let newRoute: string = '';
    switch(option){
      case 'browse':
        newRoute = '/posts';
        break;
      case 'create':
        newRoute = '/posts/edit/1';
        break;
      case 'home':
        newRoute = '/';
        break;
      case 'user':
        newRoute = '/users';
        break;
    }
    this.router.navigateByUrl(newRoute);
    this.activeOption = option;
  }
}
