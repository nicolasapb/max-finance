import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public loginForm: FormGroup;
  public loginError = false;

  constructor(
    protected formBuilder: FormBuilder,
    protected authService: AuthService
  ) {  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login(): void {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.loginError = false;
    this.authService.authenticate(userName, password).subscribe({
      next: () => console.log('autenticado'),
      error: err => {
        console.log(err);
        this.loginError = true;
        this.loginForm.reset();
      }
    });
  }


}
