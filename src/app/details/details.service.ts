import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomersList } from '../app.models';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DetailsService {
  apiUrl = 'https://private-92a969-processoseletivo1.apiary-mock.com/customers/';
  message = '';
  success = false ;

  constructor(private http: HttpClient, private router: Router) { }

editCustomers(customer: CustomersList) {
    this.http.put<CustomersList>(`${this.apiUrl}${customer.id}`, customer, httpOptions)
    .subscribe(resp => {
      this.message = `Cliente ${customer.name} atualizado com sucesso`;
      this.success = true;
      this.router.navigate(['/']);
    },
    error => {
      this.success = false;
      this.router.navigate(['/']);
    });
  }

sendNotification() {
  return {
    showNotification: this.success,
    message: this.message
  };
}


}
