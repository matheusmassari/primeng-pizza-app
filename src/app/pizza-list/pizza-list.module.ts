import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaListRoutingModule } from './pizza-list-routing.module';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PizzaListComponent],
  imports: [
    CommonModule,
    PizzaListRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    Ng2SearchPipeModule,
    FormsModule,
    
  ],
})
export class PizzaListModule {}
