import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPizzaRoutingModule } from './edit-pizza-routing.module';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';

import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [EditPizzaComponent],
  imports: [
    CommonModule,
    EditPizzaRoutingModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
  ],
})
export class EditPizzaModule {}
