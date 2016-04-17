import UrlVariable from '../Services/Router/UrlVariable';

export interface IRoute {
  path: string;
  controller: string;
  urlVariables: UrlVariable[];
  isMatch(path: string): boolean;
  parseVariableValues(url: string): void;
}
