'use strict';

describe('Controller: NoticeCtrl', function () {

  // load the controller's module
  beforeEach(module('html5editorApp'));

  var NoticeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoticeCtrl = $controller('NoticeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
