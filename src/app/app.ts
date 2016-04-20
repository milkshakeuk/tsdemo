import Router from './services/router/router';
import Route from './services/router/route';
import {IController} from './interfaces/icontroller';
import NavigationController from './controllers/navigationcontroller';

export default class App {

  router: Router;
  navigation: IController;

  constructor() {
    this.router = new Router('app/controllers/');
    this.router.addRoute(new Route('/', 'homecontroller'));
    this.router.addRoute(new Route('/about', 'aboutcontroller'));
    this.router.addRoute(new Route('/variables/{var1:string}/more/{var2:number}', 'variablecontroller'));
  }

  start():void{
    this.navigation = new NavigationController();
    this.router.route();
  }

}