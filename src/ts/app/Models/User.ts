// File: user.ts
/// <reference path="../Interfaces/INameable"/>

import INameable = require('../Interfaces/INameable');

class User implements INameable {

    constructor(public forename:string, public surname:string) { }

    get fullName():string {
        return this.forename + ' ' +this.surname;
    }
}
export = User;