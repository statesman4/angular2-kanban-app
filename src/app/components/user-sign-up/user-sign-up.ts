import {Component} from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'user-sign-up',
  template: `
    <div>
      <h1>User sign up</h1>

      <div>
        <form (submit)="signUpForm.valid && signUp()" [ngFormModel]="signUpForm">
          <div class="input">
            <labal>E-mail:</labal>
            <input type="email" name="email" ngControl="email"/>
          </div>

          <div class="input">
            <labal>First name</labal>
            <input type="text" name="firstName" ngControl="firstName"/>
          </div>

          <div class="input">
            <labal>Last name</labal>
            <input type="text" name="lastName" ngControl="lastName"/>
          </div>

          <div class="input">
            <labal>Password:</labal>
            <input type="password" name="password" ngControl="password"/>
          </div>

          <button>Sign up</button>
        </form>
      </div>
    </div>
  `,
  providers: [Auth],
  directives: [...FORM_DIRECTIVES],
  pipes: []
})
export class UserSignUp {
  public signUpForm: ControlGroup;

  constructor(formBuilder: FormBuilder, public router: Router, public auth: Auth) {
    this.signUpForm = formBuilder.group({
      email: ['simon@test.com', Validators.required],
      firstName: ['test', Validators.required],
      lastName: ['tset', Validators.required],
      password: ['test', Validators.required]
    });
  }

  signUp(): void {
    this.auth.signUp(this.signUpForm.value).subscribe(() => { console.log('get a response!'); });
  }
}
