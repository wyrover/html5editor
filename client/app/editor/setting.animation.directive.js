'use strict';

angular.module('html5editorApp')
  .directive('editorSettingAnimation', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/setting-animation.html',
      restrict: 'EA',
      controller: function($scope, Upload, EditorWidget){
        $scope.animations = [
                    {name:'无', animation:''},
                    {name:'闪烁', animation:'flash'},
                    {name:'弹跳', animation:'bounce'},
                    {name:'脉冲', animation:'pulse'},
                    {name:'拉伸抖动', animation:'rubberBand'},
                    {name:'晃动', animation:'shake'},
                    {name:'悬摆', animation:'swing'},
                    {name:'放大抖动', animation:'tada'},
                    {name:'摇摆', animation:'wobble'},
                    {name:'倾斜摆动', animation:'jello'},
                    {name:'淡入', animation:'fadeIn'},
                    {name:'向上淡入', animation:'fadeInUp'},
                    {name:'向下淡入', animation:'fadeInDown'},
                    {name:'向右淡入', animation:'fadeInLeft'},
                    {name:'向左淡入', animation:'fadeInRight'},
                    {name:'翻转', animation:'flip'},
                    {name:'上下翻转', animation:'flipInX'},
                    {name:'左右翻转', animation:'flipInY'},
                    {name:'向上滑入', animation:'slideInUp'},
                    {name:'向下滑入', animation:'slideInDown'},
                    {name:'向右滑入', animation:'slideInLeft'},
                    {name:'向左滑入', animation:'slideInRight'},
                    {name:'中心旋转', animation:'rotateIn'},
                    {name:'向右下旋转', animation:'rotateInDownLeft'},
                    {name:'向左下旋转', animation:'rotateInDownRight'},
                    {name:'向右上旋转', animation:'rotateInUpLeft'},
                    {name:'向左上旋转', animation:'rotateInUpRight'},
                    {name:'中心放大', animation:'zoomIn'}
                ];

        $scope.animationName = '';

        $scope.widget = EditorWidget;

        $scope.changeAnimation = function(animation){
          //$scope.animationName = animation.animation;
          $scope.widget.widget.animation = animation.animation;
        };
      },
      link: function (scope, element, attrs, ngModel) {
      }
    };
  });
