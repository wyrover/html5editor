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
          if(EditorWidget.widget.type=='background')
            return $scope.widget.active = false;
          if($scope.widget==EditorWidget.widget)
            return $scope.widget.active = true;
          if($scope.widget.group==EditorWidget.widget.group)
            return $scope.widget.active = true;
          if(!multi&!active)
            $scope.widget.active = false;
        })
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
