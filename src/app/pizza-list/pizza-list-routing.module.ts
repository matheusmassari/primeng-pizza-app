import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

const routes: Routes = [
  { path: '', component: PizzaListComponent },
  {
    path: 'edit-pizza/:id',
    loadChildren: () =>
      import('../edit-pizza/edit-pizza.module').then((m) => m.EditPizzaModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaListRoutingModule {}
