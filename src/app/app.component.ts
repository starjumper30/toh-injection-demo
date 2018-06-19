import { Component } from '@angular/core';
import {HeroService} from './shared/hero.service';

@Component({
  selector: 'my-root',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>&nbsp;
      <a routerLink="/heroes" routerLinkActive="active">Heroes (Lazy)</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(public heroService: HeroService){}
}
