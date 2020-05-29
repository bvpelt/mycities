import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-highlights',
  templateUrl: './city-highlights.component.html',
  styleUrls: ['./city-highlights.component.css']
})
export class CityHighlightsComponent implements OnInit {

  @Input() highlights: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
