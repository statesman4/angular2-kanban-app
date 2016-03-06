import {Component} from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'sign-in',
  template: require('./sign-in.html'),
  styleUrls: [require('./sign-in.css')],
  directives: [...FORM_DIRECTIVES],
  providers: [Auth]
})
export class SignIn {
  public loginForm: ControlGroup;

  constructor(formBuilder: FormBuilder, public router: Router, public auth: Auth) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(): void {
    this.auth.signIn(this.loginForm.value)
      .subscribe(() => {
        this.router.parent.navigate(['/Home']);
      });
  }
}
