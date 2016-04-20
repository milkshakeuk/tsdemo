import {BaseController} from '../controllers/basecontroller';
import AboutView from '../views/aboutview';

export default class AboutController extends BaseController {
  renderViews() {
    var view = new AboutView('#main-region');
    view.render();
  }
  renderHook() { }
}