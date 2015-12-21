'use strict';

angular.module('html5editorApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'hmTouchEvents'
])

.controller('MainCtrl', function($scope, Sense){
    $scope.sense = Sense.get({id:'56776d5852b8d6523897c7af'});
})

.factory('Sense', function($resource){
    return $resource('/render/:id/:controller');
})

  .run(function ($rootScope) {
    
  });