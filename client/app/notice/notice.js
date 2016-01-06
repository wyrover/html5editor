'use strict';

angular.module('html5editorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('notice', {
        url: '/notice',
        abstract: true,
        views: {
          'nav':{
            templateUrl: 'components/navbar/navbar.html'
          },
          '':{
            template: '<div ui-view="" class="container"></div>'
          },
          'footer':{
            templateUrl: 'components/footer/footer.html'
          }
        }
      })
      .state('notice.index', {
        url: '',
        templateUrl: 'app/notice/notice.html',
        controller: 'NoticeCtrl'
      })
      .state('notice.new', {
        url: '/new',
        templateUrl: 'app/notice/edit.html',
        controller: 'NoticeEditCtrl'
      })
      .state('notice.edit', {
        url: '/edit/:id',
        templateUrl: 'app/notice/edit.html',
        controller: 'NoticeEditCtrl'
      });;
  });
