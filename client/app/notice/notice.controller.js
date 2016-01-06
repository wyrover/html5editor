'use strict';

angular.module('html5editorApp')
  .controller('NoticeCtrl', function ($scope, Notice, Modal) {
    $scope.notices = Notice.query();

    $scope.insert = function(){
      Modal.open({
        title: '添加通知',
        templateUrl:'app/notice/form.html'
      });
    };
  });
