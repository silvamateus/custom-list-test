import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  pageWidth = NaN;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.pageWidth = event.target.innerWidth;
  }
  ngOnInit() {
    this.pageWidth = window.innerWidth;
  }

}
