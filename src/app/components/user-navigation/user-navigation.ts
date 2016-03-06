import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'user-navigation',
  template: require('./user-navigation.html'),
  directives: [...ROUTER_DIRECTIVES],
  providers: [Auth],
})
export class UserNavigation {
  constructor(public auth: Auth, public router: Router) {}

  signOut(): void {
    this.auth.signOut().subscribe(() => { this.router.navigate(['/SignIn']) });
  }
}
