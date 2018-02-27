var app = angular.module('app', ['angular-bootstrap-touchspin']);
app.controller('exampleController', ['$scope',
  function($scope) {

    $scope.onStartupSpinEvent = function(e) {
      console.log("touchspin.on.startupspin event !!!");
    };

    $scope.reset = function() {
      $scope.bs3TouchSpinResetValue = 50;
    };
    
    $scope.bs3TouchSpinDynamicOptions = { max: 50, initval: 1 };
    $scope.setOptions = function() {
      $scope.bs3TouchSpinDynamicOptions.max = parseInt($scope.bs3TouchSpinDynamicOptionsValue) + 50;
    };
  }
]);