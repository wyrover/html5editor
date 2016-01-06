'use strict';

angular.module('html5editorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('notice', {
        url: '/notice',
        templateUrl: 'app/notice/notice.html',
        controller: 'NoticeCtrl'
      });
  });
