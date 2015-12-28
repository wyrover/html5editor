'use strict';

angular.module('html5editorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('scene', {
        url: '/scene',
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
      .state('scene.index', {
        url: '',
        templateUrl: 'app/sense/sense.html',
        controller: 'SenseCtrl'
      })
      .state('scene.new', {
        url: '/new',
        templateUrl: 'app/sense/edit.html',
        controller: 'SenseEditCtrl'
      })
      .state('scene.edit', {
        url: '/edit/:id',
        templateUrl: 'app/sense/edit.html',
        controller: 'SenseEditCtrl'
      });
  });
