import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaListRoutingModule } from './pizza-list-routing.module';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PizzaListComponent
  ],
  imports: [
    CommonModule,
    PizzaListRoutingModule,
    HttpClientModule,
  ]
})
export class PizzaListModule { }
