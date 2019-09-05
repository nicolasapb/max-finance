import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router, RouterEvent, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

export class MenuItem {
  path: string;
  title: string;
  icon?: string;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {

  subs: Array<Subscription> = [];
  menuItems: MenuItem[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.subs[0] = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route.snapshot),
      map( finalRoute => {
        while (finalRoute.firstChild) {
          finalRoute = finalRoute.firstChild;
        }
        return finalRoute;
      })
    )
    .subscribe({
      next: (activatedRoute: ActivatedRouteSnapshot) => {
        this.menuItems = Object.keys(activatedRoute.data).map( b => activatedRoute.data[b]);
      }
    });
  }

  ngOnDestroy() {
    console.log(this.subs);
    this.subs.forEach(s => s.unsubscribe());
  }

}
