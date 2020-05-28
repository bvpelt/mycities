import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../shared/model/city.model';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  @Input() city: City;
  @Output() incrementing = new EventEmitter<number>();
  @Output() decrementing = new EventEmitter<number>();

  thumbsUpIcon = faThumbsUp;
  thumbsDownIcon = faThumbsDown;

  constructor() { }

  ngOnInit(): void {
  }

  showHighLights(): boolean {
    return (this.city.highlights && (this.city.highlights.length > 0));
  }

  incrementRating(): void {
    console.log('increment by 1');
    this.incrementing.emit(1);
  }

  decrementRating(): void {
    console.log('decrement by 1');
    this.decrementing.emit(1);
  }
}
