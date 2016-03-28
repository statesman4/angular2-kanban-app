import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Board} from "../../models/models";
import {Auth} from "../auth/auth";
import {Response} from "angular2/http";

@Injectable()
export class Api {
  constructor(public auth: Auth) {}

  getBoards(): Observable<Board[]> {
    return this.auth.http.get('/api/boards', this.auth.defaultHeaders())
      .map((res: Response) => {
        return res.json().map((object: any) => new Board(object));
      });
  }

  createBoard(boardParams: Object): Observable<any> {
    return this.auth.http.post('/api/boards', JSON.stringify(boardParams), {headers: this.auth.defaultHeaders()});
  }
}
