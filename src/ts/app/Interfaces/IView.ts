//File IView.ts
interface IView {
    target:string;
    $el:any;
    render():void;
    template:any;
    setTemplate():void;
    renderHook():void;
}
export default IView;