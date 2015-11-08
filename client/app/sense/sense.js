'use strict';

angular.module('html5editorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sense', {
        url: '/sense',
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
      .state('sense.index', {
        url: '',
        templateUrl: 'app/sense/sense.html',
        controller: 'SenseCtrl'
      })
      .state('sense.new', {
        url: '/new',
        templateUrl: 'app/sense/edit.html'
      });
  });
