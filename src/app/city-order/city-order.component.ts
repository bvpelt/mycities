import { Component, OnInit } from '@angular/core';
import { City } from '../shared/model/city.model';
import { OrderService } from '../shared/services/order.service';
import { Order } from '../shared/model/order.model';

@Component({
  selector: 'app-city-order',
  templateUrl: './city-order.component.html',
  styleUrls: ['./city-order.component.css']
})
export class CityOrderComponent implements OnInit {

  public currentOrders: Order[] = [];
  public totalPrice: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.stream
      .subscribe((city: City) => {
        this.processOrder(city);
      })
  }

  processOrder(city: City): void {
    console.log('Order voor city ontvangen: ', city);
    this.totalPrice += city.price;
    this.currentOrders.push(new Order(city, 1));
  }

  cancel(): void {
    this.currentOrders = [];
  }
  confirm(): void {
    alert('TODO: order opslaan');
  }
}
