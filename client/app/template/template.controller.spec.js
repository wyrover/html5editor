'use strict';

describe('Controller: TemplateCtrl', function () {

  // load the controller's module
  beforeEach(module('html5editorApp'));

  var TemplateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TemplateCtrl = $controller('TemplateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
