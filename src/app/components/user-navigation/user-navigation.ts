import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'user-navigation',
  template: `
    <nav>
      <a [routerLink]="['Home']" *ngIf="auth.isUserLoggedIn()">Home</a>
      <a [routerLink]="['About']" *ngIf="auth.isUserLoggedIn()">About</a>
      <a [routerLink]="['BoardsList']" *ngIf="auth.isUserLoggedIn()">Boards</a>
      <a [routerLink]="['SignIn']" *ngIf="!auth.isUserLoggedIn()">Sign in</a>
      <a [routerLink]="['SignUp']" *ngIf="!auth.isUserLoggedIn()">Sign up</a>
      <a (click)="signOut()" href="#" *ngIf="auth.isUserLoggedIn()">Sign out</a>
    </nav>
  `,
  directives: [...ROUTER_DIRECTIVES],
  providers: [Auth],
})
export class UserNavigation {
  constructor(public auth: Auth, public router: Router) {}

  signOut(): void {
    this.auth.signOut().subscribe(() => {
      this.router.navigate(['/SignIn']);
    });
  }
}
