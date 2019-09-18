import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(
    protected formBuilder: FormBuilder
  ) {  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login(): void {
    console.log(this.loginForm);
  }


}
