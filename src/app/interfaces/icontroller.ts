import UrlVariable from '../services/router/urlvariable';

export interface IController {
  renderViews(): void;
  renderHook(): void;
}