'use strict';

angular.module('myApp.challenge', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/challenge', {
    templateUrl: 'challenge/challenge.html',
    controller: 'ChallengeCtrl'
  });
}])

.controller('ChallengeCtrl', ['$scope', function($scope) {
}]);