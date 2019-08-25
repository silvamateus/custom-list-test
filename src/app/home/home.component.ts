import { Component, OnInit, HostListener, AfterViewInit} from '@angular/core';
import { CustomersList } from '../app.models';
import { HomeService } from './home.service';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { DetailsService } from '../details/details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  pageWidth = NaN;
  displayedColumns: string[] = ['id', 'name', 'age', 'city'];
  dataSource: CustomersList[];
  showNotification = false;
  notification = '';

  constructor(
    private homeService: HomeService,
    private appService: AppService,
    private detailsService: DetailsService,
    private router: Router
    )  { }

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
    this.homeService.getCustomers()
    .subscribe( customers => this.dataSource = customers);
    this.notification = this.detailsService.sendNotification().message;
    if (this.detailsService.sendNotification().showNotification) {
    setTimeout(() =>  this.showNotification = this.detailsService.sendNotification().showNotification, 100);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.showNotification = false, 3000);
  }


}

