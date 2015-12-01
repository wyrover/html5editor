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
      controller: function($scope, EditorWidget, hotkeys){
        hotkeys.bindTo($scope)
        .add({
          combo:'ctrl+z',
          callback: function(){
            console.log('undo')
          }
        });
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
