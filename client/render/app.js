'use strict';

angular.module('html5editorApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'hmTouchEvents'
])

.controller('MainCtrl', function($scope, Sense){
    $scope.sense = Sense.get({id:'sss'});
})

.factory('Sense', function($resource){
    return $resource('/render/:id/:controller');
})

  .run(function ($rootScope) {
    
  });