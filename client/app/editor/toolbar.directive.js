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
      controller: function($scope, EditorWidget, TemplateModal){
        $scope.insertWidget = function(type){
          var defaults = EditorWidget.getDefaults(type);
          defaults.active = true;
          angular.forEach($scope.page.contents, function(item){
            item.active = false;
          });
          $scope.page.contents.push(defaults);
          EditorWidget.widget = $scope.page.contents[$scope.page.contents.length-1];
        };

        $scope.insertCustomWidget = function(){
          TemplateModal().result.then(function(template){
            if(template.type=='page'){
              angular.extend($scope.page, angular.copy(template.contents[0]));
              return;
            }
            angular.forEach($scope.page.contents, function(item){
              item.active = false;
            });
            $scope.page.contents = $scope.page.contents.concat(template.contents[0].contents);
          })
        };
      },
      link: function (scope, element, attrs) {

      }
    };
  });
