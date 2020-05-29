import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityOrderComponent } from './city-order.component';

describe('CityOrderComponent', () => {
  let component: CityOrderComponent;
  let fixture: ComponentFixture<CityOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
