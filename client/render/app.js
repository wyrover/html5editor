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
      if($scope.current<=0) return;
      $scope.current--;
    };
    $scope.pageDown = function(){
      if($scope.current>=$scope.sense.contents.length-1) return;
      $scope.current++;
    };
})

.factory('Sense', function($resource){
    return $resource('/render/:id/:controller');
})

.filter('trustAsHtml', function ($sce) {
  return function (input) {
    return $sce.trustAsHtml(input);
  };
})