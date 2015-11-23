'use strict';

angular.module('html5editorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('file', {
        url: '/file',
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
      .state('file.index', {
        url:'',
        templateUrl: 'app/file/file.html',
        controller: 'FileCtrl'
      });
  });
