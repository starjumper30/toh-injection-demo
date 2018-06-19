import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {HeroSearchModule} from '../hero-search/hero-search.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HeroSearchModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
