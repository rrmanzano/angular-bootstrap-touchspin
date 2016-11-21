/// <reference path="../typings/index.d.ts" />
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
//# sourceMappingURL=angular-bootstrap-touchspin.eventHandler.js.map