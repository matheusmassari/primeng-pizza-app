import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.scss'],
})
export class EditPizzaComponent implements OnInit {
  constructor(
    private router: Router,
    private _arouter: ActivatedRoute,
    private api: ApiService,
    private fb: FormBuilder
  ) {}

  pizzaForm!: FormGroup;
  success: boolean = false;
  btnLabel: string = 'Cadastrar';
  id!: number;

  ngOnInit(): void {
    this.pizzaForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required],
      ingredients: ['', Validators.required],
    });

    this._arouter.paramMap.subscribe((params) => {
      const empId = params.get('id');
      if (empId) {
        this.id = +empId
        this.getSinglePizzaInfo(+empId);
        this.btnLabel = 'Atualizar';
      }
    });
  }

  addPizza() {
    console.log(this.pizzaForm.value);
    if (this.pizzaForm.valid) {
      this.api.create(this.pizzaForm.value).subscribe({
        next: (res) => {
          this.success = true;
          this.pizzaForm.reset();
        },
        error: () => alert('Houve um erro ao criar produto'),
      });
    }
  }

  updatePizza() {
    console.log(this.pizzaForm.value)
    this.api.update(this.pizzaForm.value, this.id).subscribe({
      next: (res) => {
        this.success = true
        this.pizzaForm.reset();        
      },
      error: () => alert('Erro ao atualizar pizza :('),
    });
  }

  goToPage(adress: string) {
    this.router.navigate([`${adress}`]);
  }

  newForm() {
    this.success = false;
  }

  editPizzaInfo(editInfo: any) {
    this.pizzaForm.patchValue({
      name: editInfo.name,
      imageUrl: editInfo.imageUrl,
      price: editInfo.price,
      ingredients: editInfo.ingredients,
    });
  }

  getSinglePizzaInfo(id: number) {
    this.api.getSinglePizza(id).subscribe({
      next: (pizzaInfo) => {
        console.log(pizzaInfo);
        this.editPizzaInfo(pizzaInfo);
      },
      error: () => alert('Houve um erro ao criar produto'),
    });
  }
}
