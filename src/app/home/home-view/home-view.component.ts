import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  hide = true;

  loginForm = this.fb.group({
    email: ['', [Validators.email]],
    password: ['', Validators.required]
  });


  public get email() {
    return this.loginForm.get('email');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log('submited');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
