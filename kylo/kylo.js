'use strict';

angular.module('myApp.kylo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kylo', {
    templateUrl: 'kylo/kylo.html',
    controller: 'KyloCtrl'
  });
}])

.controller('KyloCtrl', [function($scope) {
}]);