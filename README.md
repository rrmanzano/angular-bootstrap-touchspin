# Angular-bootstrap-touchspin directive

A simple wrapper for bootstrap-touchspin by @istvan-ujjmeszaros.
This directive allows you to add a mobile and touch friendly input spinner component for Bootstrap 3. based on bootstrap-touchspin plugin.

## Requirements

- AngularJS
- JQuery
- [bootstrap-touchspin](https://github.com/istvan-ujjmeszaros/bootstrap-touchspin)

## Oficial bootstrap-touchspin page

[bootstrap-touchspin](https://github.com/istvan-ujjmeszaros/bootstrap-touchspin)

## Examples and Demo

[Demo](http://htmlpreview.github.io/?https://github.com/rrmanzano/angular-bootstrap-touchspin/blob/v1dev/demo/index.html)

### Installation

Because this is just a wrapper for bootstrap-touchspin, you need to have it and all of its dependencies installed as a prerequisite.

Add angular-bootstrap-touchspin as a dependency to your application:

```JavaScript
angular.module('app', ['angular-bootstrap-touchspin']);
```

### Usage

Minimal example

```HTML
<input type="text" ng-model="bs3TouchSpinValue" bs3-touch-spin />
```

Add options

```HTML
<input type="text" ng-model="bs3TouchSpinInitValue" bs3-touch-spin bs3-touch-spin-options="{initval:50}" />
```

Subscribe to an event

```HTML
<input type="text" ng-model="bs3TouchSpinEventValue" bs3-touch-spin bs3-touch-spin-options="{initval:1}" bs3-touch-spin-events="{'touchspin.on.startupspin':'onStartupSpinEvent'}" />
```

```JavaScript
$scope.onStartupSpinEvent = function(e) { console.log("touchspin.on.startupspin event !!!"); };
```
