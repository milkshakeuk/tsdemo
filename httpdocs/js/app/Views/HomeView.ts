//File: HomeView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />

import IView from '../Interfaces/IView';
import BaseView from './BaseView';
import template from '/js/app/templates/home.html!text';
import Handlebars from 'handlebars';
//import { render as compiler } from '/js/libs/hgn.js!app/templates/home';

export default class HomeView extends BaseView implements IView {
    setTemplate():void {
        this.template = Handlebars.compile(template);
    }
}
