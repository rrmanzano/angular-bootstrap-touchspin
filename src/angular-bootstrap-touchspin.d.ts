interface JQuery
{
    TouchSpin(options: ITouchSpinOptions): any;
}

interface ITouchSpinOptions{
    initval: number;
    min: number;
    max: number;
}

interface IScopeBootstrapTouchspinDirective extends ng.IScope
{
    options: any;
}

interface IAttributesBootstrapTouchspinDirective extends ng.IAttributes
{
    bs3TouchSpinOptions: string;
    bs3TouchSpinEvents: string;
}