'use strict';

angular.module('html5editorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          'nav':{
            templateUrl: 'components/navbar/navbar.html'
          },
          '':{
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          },
          'footer':{
            templateUrl: 'components/footer/footer.html'
          }
        }
      });
  });