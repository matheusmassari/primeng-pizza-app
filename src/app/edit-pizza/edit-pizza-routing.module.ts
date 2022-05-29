import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';

const routes: Routes = [
  { path: '', component: EditPizzaComponent },
  { path: ':id', component: EditPizzaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPizzaRoutingModule { }
