import {IController} from '../interfaces/icontroller';
import UrlVariable from '../services/router/urlvariable';

export abstract class BaseController implements IController {

  protected urlVariables: UrlVariable[];

  constructor(urlVars?: UrlVariable[]) {
    this.urlVariables = urlVars;
    this.renderViews();
  }

  abstract renderViews(): void;
  abstract renderHook(): void;
}