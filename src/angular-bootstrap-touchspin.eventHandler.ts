module AngularBootstrapTouchspinUtils
{
    export class EventHandler {
        private $scope: ng.IScope;
        private propertyName: string;
        private fn: any;

        constructor($scope: ng.IScope, propertyName: string){
            this.$scope = $scope;
            this.propertyName = propertyName;
            this.fn = this.$scope.$parent.$eval(this.propertyName);
        }

        public action = (...items: any[]):void =>
        {
            if (!this.fn)
            {
                return;
            }

            if (!this.$scope.$root.$$phase) {
                this.$scope.$parent.$apply(() => {
                    this.fn.apply(this.$scope.$parent, items);
                });
            } else {
                this.fn.apply(this.$scope.$parent, items);
            }
        }

    }
}