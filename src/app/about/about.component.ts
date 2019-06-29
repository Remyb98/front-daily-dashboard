import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeAnimation]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
