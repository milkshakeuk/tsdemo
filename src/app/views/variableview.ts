import {BaseView} from './baseview';
import * as template from '../templates/variable';

export default class VariableView extends BaseView {
  setTemplate() {
    this.template = template;
  }
  renderHook() { }
}