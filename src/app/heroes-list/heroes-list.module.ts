import { NgModule } from '@angular/core';

import { HeroesListRoutingModule } from './heroes-list-routing.module';
import {HeroesComponent} from './heroes.component';
import {HeroDetailModule} from '../hero-detail/hero-detail.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HeroesListRoutingModule,
    HeroDetailModule
  ],
  declarations: [HeroesComponent]
})
export class HeroesListModule { }
