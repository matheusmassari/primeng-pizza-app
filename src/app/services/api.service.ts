import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>('http://localhost:3000/users/');
  }

  getAllPizzas() {
    return this.http.get<any>("http://localhost:3000/pizza/")
  }

  getSinglePizza(id: number) {
    return this.http.get<any>('http://localhost:3000/pizza/' + id);
  }

  create(data: any) {
    return this.http.post<any>('http://localhost:3000/pizza/', data);
  }

  update(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/pizza/' + id, data);
  }

  delete(id: number) {
    return this.http.delete<any>('http://localhost:3000/pizza/' + id);
  }
}
