import { Component, OnInit, HostListener } from '@angular/core';
import {CustomersList} from '../app.models';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  pageWidth = NaN;
  displayedColumns: string[] = ['id', 'name', 'age', 'city'];
  dataSource: CustomersList[];

  onClick(element) {
    this.appService.retrieveCustomer(element);
    this.router.navigate(['/edit', element.id]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.pageWidth = event.target.innerWidth;
  }
  ngOnInit() {
    this.pageWidth = window.innerWidth;
    return this.homeService.getCustomers()
    .subscribe( customers => this.dataSource = customers);
  }

}

