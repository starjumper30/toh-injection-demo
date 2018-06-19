import { Component } from '@angular/core';
import { HeroSearchService } from './hero-search.service';

@Component({
  selector: 'my-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent {

  constructor(
    public heroSearchService: HeroSearchService
  ) {}
}
