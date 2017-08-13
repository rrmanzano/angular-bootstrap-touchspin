interface JQuery
{
    TouchSpin(options: ITouchSpinOptions): any;
}

interface ITouchSpinOptions{
    initval: number;
}

interface IScopeBootstrapTouchspinDirective extends ng.IScope
{
    options: string;
}

interface IAttributesBootstrapTouchspinDirective extends ng.IAttributes
{
    bs3TouchSpinOptions: string;
    bs3TouchSpinEvents: string;
}