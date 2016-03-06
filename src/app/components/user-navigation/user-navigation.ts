import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'user-navigation',
  template: `
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['About']">About</a>
      <a [routerLink]="['SignIn']">Sign in</a>
      <a [routerLink]="['SignUp']">Sign up</a>

      <a (click)="signOut()">Sign out</a>
    </nav>
  `,
  directives: [...ROUTER_DIRECTIVES],
  providers: [Auth],
})
export class UserNavigation {
  constructor(public auth: Auth, public router: Router) {}

  signOut(): void {
    this.auth.signOut().subscribe(() => { this.router.navigate(['/SignIn']) });
  }
}
