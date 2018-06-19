import { Injectable } from '@angular/core';

let count = 0;

@Injectable()
// @Injectable({providedIn: 'root'})
export class ExtraService {
  private readonly id = ++count;
  constructor() { }
}
