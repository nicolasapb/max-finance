import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SignupService } from './signup/shared/signup.service';


@NgModule({
  declarations: [SigninComponent, SignupComponent, HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [SignupService]
})
export class HomeModule { }
