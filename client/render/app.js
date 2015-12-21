'use strict';

angular.module('html5editorApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'hmTouchEvents'
])

.controller('MainCtrl', function($scope, $location, Sense){
    $scope.sense = Sense.get({id:$location.$$path.substr(1)});
    $scope.current = 0;
    $scope.pageUp = function(){
      $scope.current--;
    };
    $scope.pageDown = function(){
      $scope.current++;
    };
})

.factory('Sense', function($resource){
    return $resource('/render/:id/:controller');
})

  .run(function ($rootScope) {
    
  });