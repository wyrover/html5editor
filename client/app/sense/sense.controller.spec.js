'use strict';

describe('Controller: SenseCtrl', function () {

  // load the controller's module
  beforeEach(module('html5editorApp'));

  var SenseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SenseCtrl = $controller('SenseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
