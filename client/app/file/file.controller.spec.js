'use strict';

describe('Controller: FileCtrl', function () {

  // load the controller's module
  beforeEach(module('html5editorApp'));

  var FileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FileCtrl = $controller('FileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
