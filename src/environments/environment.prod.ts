import {HttpClient} from '@angular/common/http';
import {HeroProdService} from '../app/shared/hero-prod.service';

export const environment = {
  production: true,
  heroServiceProvider: {useClass: HeroProdService, deps: [HttpClient]}
};
