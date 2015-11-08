'use strict';

angular.module('html5editorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('template', {
        url: '/template',
        views: {
          'nav':{
            templateUrl: 'components/navbar/navbar.html'
          },
          '':{
            templateUrl: 'app/template/template.html',
        controller: 'TemplateCtrl'
          },
          'footer':{
            templateUrl: 'components/footer/footer.html'
          }
        }
        
      });
  });
