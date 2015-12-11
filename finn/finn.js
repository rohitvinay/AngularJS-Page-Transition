'use strict';

angular.module('myApp.finn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/finn', {
    templateUrl: 'finn/finn.html',
    controller: 'FinnCtrl'
  });
}])

.controller('FinnCtrl', [function() {

}]);