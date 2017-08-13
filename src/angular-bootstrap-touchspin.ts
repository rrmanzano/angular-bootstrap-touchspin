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

        public link($scope: IScopeBootstrapTouchspinDirective, element: JQuery, attrs: IAttributesBootstrapTouchspinDirective, ngModel: ng.INgModelController)
        {
            var options = <ITouchSpinOptions>{};
            if ($scope.options){
                angular.copy($scope.options as any, options);
            }

            if (options.initval)
            {
                ngModel.$setViewValue(options.initval);
            }

            var mapEvents = function(){
              if (attrs.bs3TouchSpinEvents){
                var events = $scope.$eval(attrs.bs3TouchSpinEvents);
                for (var prop in events) {
                    if (events[prop]) {
                        var event = new AngularBootstrapTouchspinUtils.EventHandler($scope, events[prop]);
                        element.on(prop, event.action);
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