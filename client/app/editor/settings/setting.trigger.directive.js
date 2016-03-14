'use strict';

angular.module('html5editorApp')
  .directive('editorSettingTrigger', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/settings/setting-trigger.html',
      restrict: 'EA',
      controller: function($scope, Upload, Editor, FileModal){
        $scope.editor = Editor;
        //console.log($scope.editor)

        $scope.event_types = [
          {name:'点击',value:'click'},
          {name:'左滑',value:'swipeleft'},
          {name:'右滑',value:'swiperight'}
        ]
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
