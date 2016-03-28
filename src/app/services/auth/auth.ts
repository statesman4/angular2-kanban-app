import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from '../../../../node_modules/rxjs/Observable';
import {LocalStorage} from '../local-storage/local-storage';

@Injectable()
export class Auth {
  constructor(public http: Http, public localStorage: LocalStorage) {
  }

  defaultHeaders(): Headers {
    let headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Access-Control-Allow-Origin', 'true');
    return headers;
  }

  signUp({email, firstName, lastName, password}: any): Observable<any> {
    const params: string = JSON.stringify({email, password, firstName, lastName});

    return this.http.post('/api/sign_up', params, {headers: this.defaultHeaders()})
      .map((response: Response) => {
        this.localStorage.setItem('currentUserId', response.json().id);
        return response;
      });
  }

  signIn({email, password}: any): Observable<any> {
    const params: string = JSON.stringify({email, password});

    return this.http.post('/api/sign_in', params, {headers: this.defaultHeaders()})
      .map((response: Response) => {
        this.localStorage.setItem('currentUserId', response.json().id);
        return response;
      });
  }

  signOut(): Observable<any> {
    return this.http.delete('/api/sign_out')
      .map((response: Response) => {
        this.localStorage.removeItem('currentUserId');
        return response;
      });
  }

  isUserLoggedIn(): Boolean {
    return !!this.localStorage.getItem('currentUserId');
  }

  checkServerAuthentication(): any {
    this.http.get('/api/status', {headers: this.defaultHeaders()})
      .subscribe((response: Response) => {
        if(response.json() === 'UserNotLoggedIn') {
          this.localStorage.removeItem('currentUserId');
        } else {
          this.localStorage.setItem('currentUserId', parseInt(response.json()));
        }
      });
  }
}
