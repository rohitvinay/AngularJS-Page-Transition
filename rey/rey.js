'use strict';

angular.module('myApp.rey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rey', {
    templateUrl: 'rey/rey.html',
    controller: 'ReyCtrl'
  });
}])

.controller('ReyCtrl', [function() {

}]);