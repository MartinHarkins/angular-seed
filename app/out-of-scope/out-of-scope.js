'use strict';

angular.module('myApp.outOfScope', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/out-of-scope', {
    templateUrl: 'out-of-scope/out-of-scope.html',
    controller: 'OutOfScopeCtrl'
  });
}])

.controller('OutOfScopeCtrl', [function() {

}]);