'use strict';

describe('Directive: preview', function () {

  // load the directive's module and view
  beforeEach(module('html5editorApp'));
  beforeEach(module('app/preview/preview.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<preview></preview>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
