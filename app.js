'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.kylo',
  'myApp.rey',
  'myApp.finn',
  'myApp.poe',
  'myApp.phasma',
  'myApp.version',
  'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/kylo'});
}]);
