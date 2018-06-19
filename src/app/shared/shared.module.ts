import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeroService} from './hero.service';
import {ExtraService} from './extra.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [HeroService, ExtraService]
})
export class SharedModule { }
