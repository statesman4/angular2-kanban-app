import {Component} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import '../style/app.scss';

import {Api} from './services/api/api';
import {UserNavigation} from './components/user-navigation/user-navigation';
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {SignIn} from './components/sign-in/sign-in';
import {UserSignUp} from './components/user-sign-up/user-sign-up';

// <app>
// </app>

@Component({
  selector: 'app',
  providers: [...FORM_PROVIDERS, Api],
  directives: [UserNavigation, ...ROUTER_DIRECTIVES],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},
  {path: '/About', component: About, name: 'About'},
  {path: '/sign_in', component: SignIn, name: 'SignIn'},
  {path: '/sign_up', component: UserSignUp, name: 'SignUp'}
])
export class App {
  constructor(public api: Api) {}
}
