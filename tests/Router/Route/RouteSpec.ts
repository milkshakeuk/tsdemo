// File: RouteSpec.ts
/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../../src/ts/app/Services/Router/route"/>

import Route = require('../../../src/ts/app/Services/Router/route');

describe("Route Suite", () => {

    var route:Route;
    var pathToTest:string = '/root/{myvar:string}/path/{othervar:number}';
    var urlToTtest:string = '/root/teststring/path/9889';
    var controllerToTest:string = 'HomeController';

    beforeEach(() => {
        route = new Route(pathToTest,controllerToTest);
    });

    it("should be instaceof Route", () => {
        expect(route instanceof Route).toBe(true);
    });

    it("should return correct path", () => {
        expect(route.path).toBe(pathToTest);
    });

    it("should return correct Controller", () => {
        expect(route.controller).toBe(controllerToTest);
    });

    it("should parse url variables", () => {
        route.parseVariableValues(urlToTtest);
        var variables = route.urlVariables;
        expect(variables[0].name).toBe('myvar');
        expect(variables[0].type).toBe('string');
        expect(variables[0].value).toBe('teststring');

        expect(variables[1].name).toBe('othervar');
        expect(variables[1].type).toBe('number');
        expect(variables[1].value).toBe(9889);
    });
});