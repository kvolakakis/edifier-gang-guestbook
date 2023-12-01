import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClientModule]
})
export class AppComponent {
  title = 'frontend';
  menuVisible = true;

  constructor(private activatedRoute: ActivatedRoute) {

    // get current url and if it is "post-wall" then hide menu
    this.activatedRoute.url.subscribe(url => {
      console.log(url);
      if(url[0].path == "post-wall"){
        this.menuVisible = false;
      }
    });
  }

  ngOnInit(){

  }



}
