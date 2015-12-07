'use strict';

angular.module('html5editorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('account', {
        url: '/account',
        abstract:true,
        views:{
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
      .state('account.login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('account.signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('account.settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });