import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PizzaArray } from 'src/app/interfaces/PizzaArray';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

type PizzaData = PizzaArray[];

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss'],
})
export class PizzaListComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  items: MenuItem[] = [];
  pizzaArray: PizzaData = [];
  searchPizza: any;  

  cardStyle = {
    background: '#f5f5f5',      
  };

  ngOnInit(): void {
    this.items = [
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Criar Pizza',
            icon: 'pi pi-fw pi-plus',
            command: () => this.router.navigate(['edit-pizza']),
          },
          {
            label: 'Atualizar',
            icon: 'pi pi-fw pi-refresh',
            command: () => this.router.navigate(['edit-pizza']),
          },
        ],
      },
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.router.navigate(['login']),
      },
    ];
    this.getAllPizzas();
  }

  getAllPizzas() {
    this.api.getAllPizzas().subscribe({
      next: (res) => {
        this.pizzaArray = res;
      },
      error: () => alert('Erro ao buscar lista de pizzas'),
    });
  }

  deletePizza(id: number) {
    this.api.delete(id).subscribe({
      next: () => {
        alert('Pizza deletada com sucesso.');
        this.getAllPizzas();
      },
      error: () => alert('Houve algum erro ao deletar pizzas.'),
    });
  }

  editPizza(pizzaId: number) {
    this.router.navigate(['edit-pizza', pizzaId])
  }  
}
