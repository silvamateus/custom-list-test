import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CustomersList} from '../app.models';



@Injectable({
  providedIn: 'root'
})

export class HomeService {
  apiUrl = 'https://private-92a969-processoseletivo1.apiary-mock.com/customers';

  constructor(private http: HttpClient) {}
    getCustomers() {
      return this.http.get<CustomersList[]>(this.apiUrl);
    }
}
