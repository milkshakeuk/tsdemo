import {BaseController} from './basecontroller';
import NavigationView from '../views/navigationview';

export default class NavigationController extends BaseController {
  renderViews() {
    var model = {
      navs: [
        { name: 'Home', path: '#', chosen: true },
        { name: 'About', path: '#/about' },
        { name: 'Variable', path: '#/variables/yeehaaa/more/123456' }
      ]
    };
    var view = new NavigationView('#nav-region', model);
    view.render();
  }

}