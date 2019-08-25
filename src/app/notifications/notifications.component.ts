import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass']
})
export class NotificationsComponent implements OnInit {
  @Input() message: string;
  @Input() show: boolean;

  constructor() { }

  ngOnInit() {
  }

}
