//File: VariableView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />

import IView from '../Interfaces/IView';
import BaseView from './BaseView';
import template from '/js/app/templates/variable.html!text';
import Handlebars from 'handlebars';
//import { render as compiler } from '/js/libs/hgn.js!app/templates/variable';

export default class VariableView extends BaseView implements IView {
    setTemplate(){
        this.template = Handlebars.compile(template);
    }
}