import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CustomersList} from '../app.models';



@Injectable({
  providedIn: 'root'
})

export class HomeService {
  apiUrl = 'http://private-92a969-processoseletivo1.apiary-mock.com/customers';

  constructor(private http: HttpClient) {}
    getCustomers() {
      return this.http.get<CustomersList[]>(this.apiUrl);
    }
}
