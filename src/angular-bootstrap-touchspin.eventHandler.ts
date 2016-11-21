/// <reference path="../typings/index.d.ts" />

module AngularBootstrapTouchspinUtils
{
    export class EventHandler {
        private $scope: ng.IScope;
        public propertyName: string;
        public foo = (args: any) => {};

        constructor($scope: ng.IScope){
            this.$scope = $scope;
        }

        public action = (...items: any[]):void =>
        {
            var fn = this.$scope.$parent.$eval(this.propertyName);
            if (!fn)
            {
                return;
            }

            if (!this.$scope.$root.$$phase) {
                this.$scope.$parent.$apply(() => {
                    fn.apply(this.$scope.$parent, items);
                });
            } else {
                fn.apply(this.$scope.$parent, items);
            }
        }

    }
}