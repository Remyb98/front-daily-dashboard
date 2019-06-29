import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animation';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
  animations: [fadeAnimation]
})
export class DashboardViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
