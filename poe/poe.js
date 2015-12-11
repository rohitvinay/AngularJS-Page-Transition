'use strict';

angular.module('myApp.poe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/poe', {
    templateUrl: 'poe/poe.html',
    controller: 'PoeCtrl'
  });
}])

.controller('PoeCtrl', [function() {

}]);