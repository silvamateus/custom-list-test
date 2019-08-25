import { Component, OnInit } from '@angular/core';
import { CustomersList } from '../app.models';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass'],
})
export class DetailsComponent implements OnInit {
  customerData: CustomersList;

  constructor(
    private appService: AppService,
    private detailsService: DetailsService,
    private router: Router
    ) { }

  onClick() {
    this.detailsService.editCustomers(this.customerData);
  }
  onCancel() {
    this.router.navigate(['/']);
  }

  onChange(event, key) {
    this.customerData[key] = event.target.value;
  }

  ngOnInit() {
    this.customerData = this.appService.getCustomer();
    if (Number.isNaN(this.customerData.id)) {
      this.router.navigate(['/']);
    }
  }


}
