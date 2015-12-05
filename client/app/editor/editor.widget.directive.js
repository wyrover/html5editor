'use strict';

angular.module('html5editorApp')
  .directive('editorWidget', function () {
    return {
      require: 'ngModel',
      scope:{
        widget: '=ngModel'
      },
      templateUrl: 'app/editor/editor-widget.html',
      restrict: 'EA',
      controller: function($scope, EditorWidget){
        $scope.$on('widget.change', function(e, multi, active){
          if(EditorWidget.widget.type=='background'||$scope.widget!=EditorWidget.widget&&$scope.widget.group!=EditorWidget.widget.group&&!multi&!active)
            $scope.widget.active = false;
          else
            $scope.widget.active = true;
        })
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
