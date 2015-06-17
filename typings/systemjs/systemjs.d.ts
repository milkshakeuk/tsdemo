interface System {
    then: (cb: Function) => void;
}

interface SystemStatic {
    import: (name: string) => System;
}

declare var System: SystemStatic;

declare module "systemjs" {
    export default System;
}