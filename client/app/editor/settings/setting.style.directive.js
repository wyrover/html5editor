'use strict';

angular.module('html5editorApp')
  .directive('editorSettingStyle', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/settings/setting-style.html',
      restrict: 'EA',
      controller: function($scope, Editor){
        $scope.widget = Editor;
        $scope.border_style = [
                    {name:'无', style:'none'},
                    {name: '实线', style: 'solid'},
                    {name: '虚线', style: 'dashed'},
                    {name: '点状', style: 'dotted'},
                    {name: '双线', style: 'double'}
                ];
        
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
