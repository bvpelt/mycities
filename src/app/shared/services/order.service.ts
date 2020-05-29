import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  stream: Subject<City>;

  constructor() {
    this.stream = new Subject();
  }
}
