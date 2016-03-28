import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators} from "angular2/common";
import {Router} from "angular2/router";
import {Api} from "../../services/api/api";
import {Response} from "angular2/http";

@Component({
  directives: [FORM_DIRECTIVES],
  selector: 'new-board',
  template: `
    <div>
      <h1>New board</h1>

      <form (submit)="boardForm.valid && createBoard()" [ngFormModel]="boardForm">
        <div class="input">
          <label>Name</label>
          <input type="text" name="name" ngControl="name"> 
        </div>  
        
        <div class="input">
          <label>Description</label>
          <input type="text" name="description" ngControl="description"> 
        </div>  
        
        <button>
          Create a new board
        </button>
      </form>
    </div>
  `,
  providers: [Api]
})
export class NewBoard {
  boardForm: ControlGroup;

  constructor(formBuilder: FormBuilder, public router: Router, public api: Api) {
    this.boardForm = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  createBoard(): void {
    this.api.createBoard(this.boardForm.value).subscribe((response: Response) => {
      this.router.parent.navigate(['BoardsList']);
    },
    (response: Response) => {
      alert("Invalid data!");
    });
  }
}
