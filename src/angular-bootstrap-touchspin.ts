/// <reference path="angular-bootstrap-touchspin.d.ts" />
/// <reference path="angular-bootstrap-touchspin.eventHandler.ts" />

module AngularBootstrapTouchspin
{
    export class AngularBootstrapTouchspinDirective implements ng.IDirective
    {        
        public restrict = 'A';
        public require = 'ngModel';
        public scope = {
            options: '=?bs3TouchSpinOptions'
        };

        // To solve the minification problem
        static $inject = ["$scope", "element", "attrs", "ngModel"];

        public link: ng.IDirectiveLinkFn = (
            $scope: IScopeBootstrapTouchspinDirective,
            element: JQuery,
            $attrs: IAttributesBootstrapTouchspinDirective,
            ngModel?: ng.INgModelController) => {
                var options = <ITouchSpinOptions>{};
                if ($scope.options){
                    options = $scope.options;
                    $scope.$watch(() => { 
                        return $scope.options
                    },(newValue, oldValue) => {
                        if (!angular.equals(newValue, oldValue)){
                            var $el = element as any;
                            $el.trigger("touchspin.updatesettings", newValue);
                        }
                    }, true);
    
                }

                if (options.initval)
                {
                    ngModel.$setViewValue(options.initval);
                }

                var mapEvents = () => {
                    if ($attrs.bs3TouchSpinEvents){
                        var events = $scope.$eval($attrs.bs3TouchSpinEvents);
                        for (var prop in events) {
                            if (events[prop]) {
                                var event = new AngularBootstrapTouchspinUtils.EventHandler($scope);
                                event.propertyName = events[prop];
                                element.on(prop,  event.action);
                            }
                        }
                    }
                };

                mapEvents();
                element.TouchSpin(options);
        }
    }
}

angular
    .module('angular-bootstrap-touchspin', [])
    .directive('bs3TouchSpin', () => new AngularBootstrapTouchspin.AngularBootstrapTouchspinDirective);