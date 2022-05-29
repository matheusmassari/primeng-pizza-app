import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'pizza-list',
    loadChildren: () =>
      import('./pizza-list/pizza-list.module').then((m) => m.PizzaListModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-page/login-page.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'edit-pizza',
    loadChildren: () =>
      import('./edit-pizza/edit-pizza.module').then((m) => m.EditPizzaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
