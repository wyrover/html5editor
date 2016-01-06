'use strict';

angular.module('html5editorApp')
  .controller('NoticeCtrl', function ($scope, Notice, Modal) {
    $scope.notices = Notice.query();
    $scope.model = new Notice();

    $scope.insert = function(){
     var instance = Modal.open({
        title: '添加通知',
        templateUrl:'app/notice/form.html'
      });
     instance.result.then(function(data){
        angular.merge($scope.model, angular.copy(data));
        $scope.model.$save();
     });
    };
  });
