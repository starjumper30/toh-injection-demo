import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HeroSearchService} from '../hero-search.service';
import {catchError, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Observable, of, Subject} from 'rxjs/index';
import {Hero} from '../../shared/hero';

@Component({
  selector: 'my-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms.pipe(
      debounceTime(300), // wait for 300ms pause in events
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(
        term =>
          term // switch to new observable each time
            ? // return the http search observable
            this.heroSearchService.search(term)
            : // or the observable of empty heroes if no search term
            of<Hero[]>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<Hero[]>([]);
      })
    );
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
