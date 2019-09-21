import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user$: Observable<User>;
  public user: User;

  constructor(protected userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe({
      next: user => this.user = user
    });
  }

  ngOnInit() { }

}
