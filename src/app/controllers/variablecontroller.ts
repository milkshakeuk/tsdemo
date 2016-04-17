import {IController} from '../interfaces/icontroller';
import {BaseController} from '../controllers/basecontroller';
import VariableView from '../views/variableview';

export default class VariableController extends BaseController {

  renderViews() {
    var view = new VariableView('#main-region', { variables: this.urlVariables });
    view.render();
  }

}