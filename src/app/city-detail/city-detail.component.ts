import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../shared/model/city.model';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from '../shared/services/order.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CityService } from '../shared/services/city.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  //  @Input() city: City;
  city: City = null;
  id: number = 0;
  restrictions: string;
  @Output() incrementing = new EventEmitter<number>();
  @Output() decrementing = new EventEmitter<number>();

  thumbsUpIcon = faThumbsUp;
  thumbsDownIcon = faThumbsDown;

  constructor(private activatedRoute: ActivatedRoute,
    private cityService: CityService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.restrictions = 'All rights reserved';
    this.activatedRoute.paramMap
      .subscribe((route: ParamMap) => {
        console.log('Route: ', route);
        this.id = parseInt(route.get('id'));
        if ((this.id != null) && (this.id > 0)) {
          this.cityService.getCity(this.id)
            .subscribe(
              (res: City) => {
                console.log('Received city ', res);
                // get new list
                this.city = res;
              },
              err => {
                console.error('Error during get city ', this.id, ': ', err);
                this.city = null;
              },
              () => {
                console.log('getCity ready');
              }
            )
        }
      });
  }

  showHighLights(): boolean {
    return (this.city.highlights && (this.city.highlights.length > 0));
  }

  incrementRating(): void {
    console.log('increment by 1');
    this.city.posrating += 1;
    this.incrementing.emit(1);
    this.updateCity(this.city);
  }

  decrementRating(): void {
    console.log('decrement by 1');
    this.city.negrating += 1;
    this.decrementing.emit(1);
    this.updateCity(this.city);
  }

  order(city: City): void {
    console.log(`Stedentripje geboekt voor: ${city.name}, voor ${city.price} EURO`);
    this.orderService.stream.next(city); // throw event
  }

  updateCity(city: City): void {
    console.log('Update city - id: ', city.id, ' name: ', city.name, ' province: ', city.province, ' photo: ', city.photo);
    this.cityService.updateCity(city)
      .subscribe(
        res => {
          console.log('Updated city ', city.name);
        },
        err => {
          console.error('Error during adding city ', city.name, ': ', err);
        },
        () => {
          console.log('updateCity ready');
        }
      )
  }
}
