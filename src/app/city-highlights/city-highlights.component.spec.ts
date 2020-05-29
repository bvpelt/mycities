import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityHighlightsComponent } from './city-highlights.component';

describe('CityHighlightsComponent', () => {
  let component: CityHighlightsComponent;
  let fixture: ComponentFixture<CityHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
