'use strict';

angular.module('html5editorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('template', {
        url: '/template',
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
      .state('template.index', {
        url: '',
        templateUrl: 'app/template/template.html',
        controller: 'TemplateCtrl'
      })
      .state('template.new', {
        url: '/new',
        templateUrl: 'app/template/edit.html',
        controller: 'TemplateEditCtrl'
      })
      .state('template.edit', {
        url: '/edit/:id',
        templateUrl: 'app/template/edit.html',
        controller: 'TemplateEditCtrl'
      });
  });
