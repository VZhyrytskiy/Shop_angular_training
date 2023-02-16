import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module'
import { ProductsModule } from './products/products.module'
import { OrdersModule } from './orders/orders.module'
import { SharedModule } from './shared/shared.module'
import { constants } from './core/services/constants.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CartModule,
    ProductsModule,
    OrdersModule,
    SharedModule
  ],
  providers: [{ provide: constants, useValue: constants }],
  bootstrap: [AppComponent]
})
export class AppModule { }
