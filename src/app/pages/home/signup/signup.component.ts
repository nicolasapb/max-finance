import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './shared/user-not-taken.validator.service';
import { NewUser } from './shared/new-user';
import { SignupService } from './shared/signup.service';
import { ToastService } from 'src/app/core/components/toast/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      fullName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(16),
          lowerCaseValidator
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(14)]],
    });
  }

  signup(): void {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService.signup(newUser)
      .subscribe({
        next: () => this.router.navigate(['']),
        error: err => {
          console.error(err);
          this.toastService.show({ text: 'Ocorreu um erro no servidor', type: 'danger'});
        }
      });
  }

}
