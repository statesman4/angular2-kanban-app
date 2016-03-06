import {Serializable} from './serializable';

export class Board extends Serializable {
  id: number;
  name: string;
  description: string;

  constructor(object: Object) {
    super(object);
  }
}
