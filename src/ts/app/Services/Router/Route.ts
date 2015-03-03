// File: Route.ts
/// <reference path="../../Interfaces/IRoute" />
/// <reference path="./UrlVariable" />
/// <reference path="../../Interfaces/IController" />
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>

import IRoute = require('../../Interfaces/IRoute');
import UrlVariable = require('./UrlVariable');
import IController = require('../../Interfaces/IController');
import _ = require('underscore');
import $ = require('jquery');

class Route implements IRoute {
    private varTypePattern:RegExp = /(\{([a-zA-Z0-9]+):([a-zA-Z]+)\})/g;
    private urlPattern:RegExp;
    private varValPattern:RegExp;

    constructor(public path:string,
                public controller:string,
                public urlVariables:UrlVariable[] = []){

        this._pathToPatterns();
        this._parseVariableTypes();
    }

    public isMatch(path:string):boolean{
        return this.urlPattern.test(path);
    }

    public parseVariableValues(url:string):void{
        if(!this.hasVariables) return;
        var match:string[];
        while((match = this.varValPattern.exec(url)) != null){
            _.each(this.urlVariables, (item, i) => {
                var variable = this.urlVariables[i];
                if(variable.type === 'string'){
                    variable.value = match[i+1].toString();
                    return;
                }
                if(variable.type === 'number'){
                    variable.value = Number(match[i+1]);
                    return;
                }
                throw new TypeError("Unexpected Type: Only primitive types String and Number allowed.");
            });
        }
    }

    private _pathToPatterns(){
        var urlMatch = this.path.replace(/\{[a-zA-Z0-9]+:[a-zA-Z]+\}/ig, '[a-zA-Z0-9]+')
                                .replace('\/','\\/');

        var valExtract = this.path.replace(/\{[a-zA-Z0-9]+:[a-zA-Z]+\}/ig, '([a-zA-Z0-9]+)')
                                  .replace('\/','\\/');

        this.urlPattern = new RegExp(`^${urlMatch}$`);
        this.varValPattern = new RegExp(valExtract,'g');
    }

    private _parseVariableTypes():void{
        if(this.path.indexOf('{') === -1) return;
        var match:string[];
        while((match = this.varTypePattern.exec(this.path)) != null){
            this.urlVariables.push(new UrlVariable(match[2], match[3]));
        }
    }

    private get hasVariables():boolean{
        return this.urlVariables.length > 0;
    }
}
export = Route;