// File: Route.ts
/// <reference path="../../Interfaces/IRoute" />
/// <reference path="./UrlVariable" />
/// <reference path="../../../../../typings/tsd.d.ts" />

import IRoute from '../../Interfaces/IRoute';
import UrlVariable from './UrlVariable';
import _ from 'underscore';
import $ from 'jquery';

export default class Route implements IRoute {
    private varTypePattern: RegExp = /(\{([a-zA-Z0-9]+):([a-zA-Z]+)\})/g;
    private urlPattern: RegExp;
    private varValPattern: RegExp;
    public urlVariables: Array<UrlVariable> = [];

    constructor(public path: string,
        public controller?: string) {

        this._controllerByConvention();
        this._pathToPatterns();
        this._parseVariableTypes();
    }

    public isMatch(path: string): boolean {
        return this.urlPattern.test(path);
    }

    public parseVariableValues(url: string): void {
        if (!this.hasVariables) return;
        var match: string[];
        while ((match = this.varValPattern.exec(url)) !== null) {
            _.each(this.urlVariables, (item, i) => {
                var variable = this.urlVariables[i];
                if (variable.type === 'string') {
                    variable.value = match[i + 1].toString();
                    return;
                }
                if (variable.type === 'number') {
                    variable.value = Number(match[i + 1]);
                    return;
                }
                throw new TypeError("Unexpected Type: Only primitive types String and Number allowed.");
            });
        }
    }

    private _controllerByConvention() {
        if (this.controller !== undefined) {
            return;
        }

        if (this.path === '/') {
            this.controller = 'HomeController';
            return;
        }

        var match = this.path.match(/^\/[a-z0-9]+/);
        if (!match) {
            throw new RangeError(`No valid root fragment found for given path: ${this.path}.`);
        }

        this.controller = match[0][1].toUpperCase() + match[0].substring(2) + 'Controller';
    }

    private _pathToPatterns() {
        var urlMatch = this.path.replace(/\{[a-zA-Z0-9]+:[a-zA-Z]+\}/ig, '[a-zA-Z0-9]+')
            .replace('\/', '\\/');

        var valExtract = this.path.replace(/\{[a-zA-Z0-9]+:[a-zA-Z]+\}/ig, '([a-zA-Z0-9]+)')
            .replace('\/', '\\/');

        this.urlPattern = new RegExp(`^${urlMatch}$`);
        this.varValPattern = new RegExp(valExtract, 'g');
    }

    private _parseVariableTypes(): void {
        if (this.path.indexOf('{') === -1) return;
        var match: string[];
        while ((match = this.varTypePattern.exec(this.path)) !== null) {
            if (match[3] !== 'string' && match[3] !== 'number') {
                throw new TypeError("Unexpected Type: Only primitive types String and Number allowed.");
            }
            this.urlVariables.push(new UrlVariable(match[2], match[3]));
        }
    }

    private get hasVariables(): boolean {
        return this.urlVariables.length > 0;
    }
}
