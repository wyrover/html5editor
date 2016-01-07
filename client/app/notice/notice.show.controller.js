'use strict';

angular.module('html5editorApp')
  .controller('NoticeShowCtrl', function ($scope, $state, Notice, Modal) {
    $scope.notice = Notice.get({id:$state.params.id});
  });
