var app = angular.module('app', ['angular-bootstrap-touchspin']);
app.controller('exampleController', ['$scope',
  function($scope) {
    $scope.onStartupSpinEvent = function(e) {
      console.log("touchspin.on.startupspin event !!!");
    };
  }
]);