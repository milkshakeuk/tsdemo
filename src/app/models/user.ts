import {INameable} from'../interfaces/inameable';

export default class User implements INameable {

  constructor(public forename: string, public surname: string) { }

  get fullName(): string {
    return `${this.forename} ${this.surname}`;
  }
}