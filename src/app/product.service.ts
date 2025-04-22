import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductCreation } from './product-creation';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/api/products";
  private userURL = "http://localhost:8080/api/users";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  createProduct(product: ProductCreation): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.userURL}`);
  }

  createUser(user: User): Observable<any>{
    return this.httpClient.post(`${this.userURL}`, user);
  }

  deleteUser(name: string): Observable<any>{
    return this.httpClient.delete(`${this.userURL}/${name}`);
  }

}
