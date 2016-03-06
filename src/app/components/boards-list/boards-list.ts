import {Component} from 'angular2/core';
import {Board} from '../../models/board';
import {Api} from "../../services/api/api";
import {NgFor} from "angular2/common";

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
    </div>
  `,
  directives: [NgFor]
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
