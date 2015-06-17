//File: AboutView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />

import IView from '../Interfaces/IView';
import BaseView from './BaseView';
import template from '/js/app/templates/about.html!text';
import Handlebars from 'handlebars';
//import { render as compiler } from '/js/libs/hgn.js!app/templates/about';

export default class AboutView extends BaseView implements IView {
    setTemplate(){
        this.template = Handlebars.compile(template);
    }
}