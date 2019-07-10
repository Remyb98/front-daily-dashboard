import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../animation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeAnimation]
})
export class AboutComponent implements OnInit {

  offerCookie() {
    this.snackBar.open('Merci pour le cookie !', 'Fermer', {
      duration: 3000
    });
  }

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
