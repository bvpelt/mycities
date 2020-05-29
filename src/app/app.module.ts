import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { CityService } from './shared/services/city.service';
import { MovieComponent } from './movie/movie.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityHighlightsComponent } from './city-highlights/city-highlights.component';
import { CityOrderComponent } from './city-order/city-order.component'
import { OrderService } from './shared/services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderComponent,
    MovieComponent,
    CityDetailComponent,
    CityHighlightsComponent,
    CityOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [CityService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
