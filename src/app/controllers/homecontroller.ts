import {IController} from '../interfaces/icontroller';
import {BaseController} from './basecontroller';
import HomeView from '../views/homeview';
import User from '../models/user';

export default class HomeController extends BaseController {
  renderViews() {
    var model = new User('Mr', 'Awesome');
    var view = new HomeView('#main-region', model);
    view.render();
  }
  renderHook() { }
}