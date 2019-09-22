import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public loginForm: FormGroup;
  public loginError = false;

  @ViewChild('userNameInput', {static: true}) userNameInput: ElementRef<HTMLInputElement>;
  @ViewChild('rememberMe', {static: true}) rememberMe: ElementRef<HTMLInputElement>;

  constructor(
    protected formBuilder: FormBuilder,
    protected authService: AuthService,
    protected router: Router,
    protected platformDetectorService: PlatformDetectorService
  ) {  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    // tslint:disable-next-line:no-unused-expression
    this.platformDetectorService.isPlatformBrowser() &&
      this.userNameInput.nativeElement.focus();
  }

  login(): void {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.loginError = false;
    this.authService.authenticate(userName, password, this.rememberMe.nativeElement.checked).subscribe({
      next: () => {
        console.log('autenticado');
        this.router.navigate(['dashboard']);
      },
      error: err => {
        console.log(err);
        this.loginError = true;
        this.loginForm.reset();
        // tslint:disable-next-line:no-unused-expression
        this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
      }
    });
  }


}
