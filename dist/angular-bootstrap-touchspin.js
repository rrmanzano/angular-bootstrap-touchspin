/**
 * angular-bootstrap-touchspin - v0.1
 * A simple wrapper for bootstrap-touchspin by @istvan-ujjmeszaros. This directive allows you to add a mobile and touch friendly input spinner component for Bootstrap 3. based on bootstrap-touchspin plugin.
 * https://github.com/rrmanzano/angular-bootstrap-touchspin
 * License: MIT http://opensource.org/licenses/MIT
 */
var AngularBootstrapTouchspinUtils;
(function (AngularBootstrapTouchspinUtils) {
    var EventHandler = (function () {
        function EventHandler($scope) {
            var _this = this;
            this.foo = function (args) { };
            this.action = function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i - 0] = arguments[_i];
                }
                var fn = _this.$scope.$parent.$eval(_this.propertyName);
                if (!fn) {
                    return;
                }
                if (!_this.$scope.$root.$$phase) {
                    _this.$scope.$parent.$apply(function () {
                        fn.apply(_this.$scope.$parent, items);
                    });
                }
                else {
                    fn.apply(_this.$scope.$parent, items);
                }
            };
            this.$scope = $scope;
        }
        return EventHandler;
    }());
    AngularBootstrapTouchspinUtils.EventHandler = EventHandler;
})(AngularBootstrapTouchspinUtils || (AngularBootstrapTouchspinUtils = {}));
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
        AngularBootstrapTouchspinDirective.$inject = ["$scope", "element", "attrs", "ngModel"];
        return AngularBootstrapTouchspinDirective;
    }());
    AngularBootstrapTouchspin.AngularBootstrapTouchspinDirective = AngularBootstrapTouchspinDirective;
})(AngularBootstrapTouchspin || (AngularBootstrapTouchspin = {}));
angular
    .module('angular-bootstrap-touchspin', [])
    .directive('bs3TouchSpin', function () { return new AngularBootstrapTouchspin.AngularBootstrapTouchspinDirective; });
