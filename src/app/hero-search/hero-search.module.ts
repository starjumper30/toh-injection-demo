import { NgModule } from '@angular/core';
import {HeroSearchComponent} from './hero-search.component';
import {SharedModule} from '../shared/shared.module';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HeroSearchComponent, SearchBoxComponent],
  exports: [HeroSearchComponent]
})
export class HeroSearchModule { }
