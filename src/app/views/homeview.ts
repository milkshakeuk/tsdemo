import {BaseView} from './baseview';
import * as template from '../templates/home';

export default class HomeView extends BaseView {
  setTemplate(): void {
    this.template = template;
  }
  renderHook(): void { }
}