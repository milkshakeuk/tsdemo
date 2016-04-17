import {BaseView} from './baseview';
import * as $ from 'jquery';
import * as template from '../templates/nav';

export default class NavigationView extends BaseView {
  setTemplate() {
    this.template = template;
  }
  renderHook() {
    var navs = this.$el.find('ul.nav li');
    navs.on('click', function() {
      navs.removeClass('active');
      $(this).addClass('active');
    });
  }
}