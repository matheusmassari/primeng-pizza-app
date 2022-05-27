import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
