'use strict';

angular.module('html5editorApp')
  .directive('editorWidget', function () {
    return {
      require: 'ngModel',
      scope:{
        widget: '=ngModel'
      },
      templateUrl: 'app/editor/stage/editor-widget.html',
      restrict: 'EA',
      controller: function($scope, Editor){
      },
      link: function (scope, element, attrs, ngModel) {
        var shape;
        scope.$watch('widget.type', function(nv, ov){
          switch(nv){
             case 'shape':
              renderShape();
           }  
        });
       
       function renderShape(){
         shape = shape||element.find('svg');
        console.log('renderShape',shape)

       };

      }
    };
  });
