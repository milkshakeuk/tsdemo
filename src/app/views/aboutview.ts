import {IView} from '../interfaces/iview';
import {BaseView} from './baseview';
import * as template from '../templates/about';

export default class AboutView extends BaseView {
  setTemplate() {
    this.template = template;
  }
  renderHook() { }
}