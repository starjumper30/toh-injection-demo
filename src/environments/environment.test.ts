import {HttpClient} from '@angular/common/http';
import {HeroTestService} from '../app/shared/hero-test.service';

export const environment = {
  production: false,
  heroServiceProvider: {useClass: HeroTestService, deps: [HttpClient]}
};
