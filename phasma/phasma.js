'use strict';

angular.module('myApp.phasma', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phasma', {
    templateUrl: 'phasma/phasma.html',
    controller: 'PhasmaCtrl'
  });
}])

.controller('PhasmaCtrl', [function() {

}]);