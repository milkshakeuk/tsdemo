export interface IView {
  target: string;
  $el: any;
  render(): void;
  template: any;
  setTemplate(): void;
  renderHook(): void;
}
