export class Serializable {
  constructor(object: Object) {
    for (var propName in object) {
      this[propName] = object[propName];
    }
  }
}
