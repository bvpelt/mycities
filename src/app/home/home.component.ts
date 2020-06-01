import { Component, OnInit } from '@angular/core';
import { CityService } from '../shared/services/city.service';
import { Observable } from 'rxjs';
import { City } from '../shared/model/city.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  cities$: Observable<City[]>;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.title = 'Cities';
    this.cities$ = this.cityService.getCities();
  }

}
