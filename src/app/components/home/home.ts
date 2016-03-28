import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES],
  styles: [require('./home.scss')],
  template: require('./home.html'),
  providers: [Auth]
})
export class Home implements OnInit {
  constructor(public auth: Auth) {
    // Do stuff
  }

  ngOnInit() {
    this.auth.checkServerAuthentication();
  }
}
