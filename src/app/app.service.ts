import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomersList } from './app.models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private customerData = new BehaviorSubject<CustomersList>({id: NaN, name: '', age: NaN, city: ''});

  constructor() {}


  retrieveCustomer(customer) {
    this.customerData.next(customer);
  }

  getCustomer(): any {
    return this.customerData.value;
  }
}
