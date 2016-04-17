import {IController} from '../../interfaces/icontroller';
import {IRoute} from '../../interfaces/iroute';
import UrlVariable from './urlvariable';

type Controller = new (urlVars?: UrlVariable[]) => IController;

export default class Router {

  private routes: Array<IRoute>;
  private currentController: IController;

  constructor(public basePath: string) {
    this.routes = [];
    window.addEventListener('hashchange', () => this.route());
  }
  addRoute(route: IRoute) {
    this.routes.push(route);
  }
  route() {
    var path = location.hash.slice(1) || '/';
    var route = this.routes.filter(route => route.isMatch(path))[0];

    if (!route) {
      throw new ReferenceError(`No route found that matches given path: ${path}`);
    }
    this.initialiseController(route, path);
  }

  private initialiseController(route: IRoute, url: string): void {
    route.parseVariableValues(url);
    System.import(this.basePath + route.controller).then((Module: { default: Controller }) => {
      this.currentController = new Module.default(route.urlVariables);
    });
  }

}
