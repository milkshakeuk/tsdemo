import {IView} from '../interfaces/iview';
import * as $ from 'jquery';

export abstract class BaseView implements IView {

  target: string;
  $el: any;
  model: any;
  template: (model:any) => string;

  constructor(target: string, model?: any) {
    this.target = target;
    this.model = model;
    this.setTemplate();
  }

  render = (): void => {
    var html = this.template(this.model);
    this.$el = $(html);
    $(this.target).html(this.$el);
    this.renderHook();
  }

  abstract setTemplate():void;
  abstract renderHook():void;
}