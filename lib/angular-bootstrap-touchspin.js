/// <reference path="../typings/index.d.ts" />
/// <reference path="angular-bootstrap-touchspin.d.ts" />
/// <reference path="angular-bootstrap-touchspin.eventHandler.ts" />
var AngularBootstrapTouchspin;
(function (AngularBootstrapTouchspin) {
    var AngularBootstrapTouchspinDirective = (function () {
        function AngularBootstrapTouchspinDirective() {
            this.restrict = 'A';
            this.require = 'ngModel';
            this.scope = {
                options: '=?bs3TouchSpinOptions'
            };
        }
        AngularBootstrapTouchspinDirective.prototype.link = function ($scope, element, attrs, ngModel) {
            var options = {};
            if ($scope.options) {
                angular.copy($scope.options, options);
            }
            if (options.initval) {
                ngModel.$setViewValue(options.initval);
            }
            var mapEvents = function () {
                if (attrs.bs3TouchSpinEvents) {
                    var events = $scope.$eval(attrs.bs3TouchSpinEvents);
                    for (var prop in events) {
                        if (events[prop]) {
                            var event = new AngularBootstrapTouchspinUtils.EventHandler($scope);
                            event.propertyName = events[prop];
                            element.on(prop, event.action);
                        }
                    }
                }
            };
            mapEvents();
            element.TouchSpin(options);
        };
        // To solve the minification problem
        AngularBootstrapTouchspinDirective.$inject = ["$scope", "element", "attrs", "ngModel"];
        return AngularBootstrapTouchspinDirective;
    }());
    AngularBootstrapTouchspin.AngularBootstrapTouchspinDirective = AngularBootstrapTouchspinDirective;
})(AngularBootstrapTouchspin || (AngularBootstrapTouchspin = {}));
angular
    .module('angular-bootstrap-touchspin', [])
    .directive('bs3TouchSpin', function () { return new AngularBootstrapTouchspin.AngularBootstrapTouchspinDirective; });
//# sourceMappingURL=angular-bootstrap-touchspin.js.map