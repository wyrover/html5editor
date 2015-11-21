'use strict';

angular.module('html5editorApp')
  .directive('editorToolbar', function () {
    return {
      require: 'ngModel',
      scope: {
        page: '=ngModel'
      },
      templateUrl: 'app/editor/toolbar.html',
      restrict: 'EA',
      controller: function($scope){
        var defaults = {
          position:'absolute',
          top:'0',
          left:'0'
        };

        $scope.insertWidget = function(type){
          var conf = angular.copy(defaults);
          conf.type = type;
          $scope.page.contents.push(conf);
        };
      },
      link: function (scope, element, attrs) {

      }
    };
  });
