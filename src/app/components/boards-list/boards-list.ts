import {Component} from 'angular2/core';
import {Board} from '../../models/board';
import {Api} from "../../services/api/api";
import {NgFor} from "angular2/common";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: 'boards-list',
  template: `
    <div>
      <h1>Boards:</h1>

      <ul>
        <li *ngFor="#board of boards">
          {{ board.id }}
          {{ board.name }}
          {{ board.description }}
        </li>
      </ul>
      
      <a [routerLink]="['NewBoard']">Add a new board</a>
    </div>
  `,
  directives: [NgFor, ...ROUTER_DIRECTIVES]
})
export class BoardsList {
  public boards: Board[];

  constructor(public api: Api) {}

  ngOnInit(): void {
    this.api.getBoards().subscribe((boards: Board[]) => {
      this.boards = boards;
    });
  }
}
