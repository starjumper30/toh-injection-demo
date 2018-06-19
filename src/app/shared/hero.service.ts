import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from './hero';
import {environment} from '../../environments/environment';

const heroSvcProvider = environment.heroServiceProvider;

@Injectable({
  providedIn: 'root',
  useClass: heroSvcProvider.useClass,
  deps: heroSvcProvider.deps
})
export abstract class HeroService {

  abstract getHeroes(): Observable<Hero[]>;

  abstract getHero(id: number): Observable<Hero>;

  abstract save(hero: Hero): Observable<Hero> ;

  abstract delete(hero: Hero): Observable<Hero> ;

}
