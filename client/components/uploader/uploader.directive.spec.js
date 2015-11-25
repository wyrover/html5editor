'use strict';

describe('Directive: uploader', function () {

  // load the directive's module and view
  beforeEach(module('html5editorApp'));
  beforeEach(module('components/uploader/uploader.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<uploader></uploader>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
