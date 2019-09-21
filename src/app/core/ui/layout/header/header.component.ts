import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user$ = userService.getUser();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
