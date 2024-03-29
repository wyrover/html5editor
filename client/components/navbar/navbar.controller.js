'use strict';

angular.module('html5editorApp')
  .controller('NavbarCtrl', function ($scope, $state, $location, Auth, AccountModal, Notice) {
    $scope.menu = [
    {
      'title': '模板',
      'link': 'template'
    },
    {
      'title': '场景',
      'link': 'scene'
    },
//     {
//       'title': '图文',
//       'link': 'article'
//     },
//     {
//       'title': '广告',
//       'link': 'adver'
//     },
    {
      'title': '素材',
      'link': 'file'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.notices = new Notice([]);

    if($scope.isLoggedIn){
      $scope.notices = Notice.query();
    }

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.login = function(e) {
      e.preventDefault();
      AccountModal.login()
      .result.then(function(){
        $scope.notices = Notice.query();
      });
    };

    $scope.signup = function(e) {
      e.preventDefault();
      AccountModal.signup();
    };

    $scope.isActive = function(route) {
      return $state.includes(route.split('/')[0]);
    };
  });