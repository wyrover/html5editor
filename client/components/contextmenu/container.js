'use strict';

angular.module('html5editorApp')
.directive('contextmenuContainer', function Container() {
  return {
    scope: {
      contextmenu: '=contextmenuContainer'
    },
    restrict: 'A',
    controller: ['$scope', ContainerCtrl]
  };

  function ContainerCtrl($scope) {
    var pub = this;
    pub.get = get;

    function get() {
      return $scope.contextmenu;
    }
  }

});


