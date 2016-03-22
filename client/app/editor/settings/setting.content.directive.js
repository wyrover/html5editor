'use strict';

angular.module('html5editorApp')
  .directive('editorSettingContent', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/settings/setting-content.html',
      restrict: 'EA',
      controller: function($scope, Upload, Editor, FileModal){
        $scope.widget = Editor;

        $scope.fieldTypes = [
          {name:'输入框',type:'input'},
          {name:'文本框',type:'textarea'},
          {name:'下拉框',type:'select'},
          {name:'单选按钮',type:'radio'},
          {name:'多选按钮',type:'checkbox'},
        ];

        $scope.shapes = [
          {name:'圆形',value:'ellipse'},
          {name:'三角形',value:'traingle'},
          {name:'矩形',value:'rect'},
          {name:'边角',value:'angle'}
        ];

        $scope.selectShape = function(shape){
          $scope.widget.widget.shape = shape.value;
          $scope.widget.widget.src="/assets/svg/"+shape.value+'.svg';
        };
        
        $scope.selectBackground = function(){
          FileModal().result.then(function(file){
            $scope.widget.widget.src = '/files/'+file._id;
          });
        };

        $scope.clearBackground = function(){
          $scope.widget.widget.src = '';
        };
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
