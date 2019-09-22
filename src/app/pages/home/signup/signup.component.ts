import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      fullName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      userName: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(16),
          lowerCaseValidator
        ]
      ],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(14)]],
    });
  }

}
