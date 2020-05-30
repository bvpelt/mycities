import { Component, OnInit } from '@angular/core';
import { CityService } from '../shared/services/city.service';
import { City } from '../shared/model/city.model';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {
  public name: string;
  public province: string;
  public price: number;
  public posrating: number;
  public negrating: number;
  public highlights?: string[];
  public photo?: string;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
  }

  addCity(): void {
    let currentCity: City = new City(null,
      this.name,
      this.province,
      this.price,
      0,
      0,
      null,
      this.photo);
    this.cityService.addCity(currentCity)
      .subscribe(
        res => {
          console.log('Added city ', currentCity.name);
        },
        err => {
          console.error('Error during adding city ', currentCity.name, ': ', err);
        },
        () => {
          console.log('addCity ready');
          this.name = null;
          this.province = null;
          this.price = null;
          this.photo = null;
        }
      );
  }
}
