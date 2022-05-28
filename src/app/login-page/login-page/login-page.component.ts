import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private api: ApiService) {}

  isLoading: boolean = false;

  ngOnInit(): void {}

  goToPage(adress: string) {
    this.getUsers();
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate([`${adress}`]);
    }, 1500);
  }

  getUsers() {
    this.api.getAllUsers().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {
        this.isLoading = false;
        alert('Erro ao autenticar usuário.')
      },
    });
  }
}
