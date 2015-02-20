//File IView.ts
interface IView {
    target:string;
    $el:any;
    render():void;
    compiler:any;
    setCompiler():void;
    renderHook():void;
}
export = IView;