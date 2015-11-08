'use strict';

describe('Directive: editor', function () {

  // load the directive's module and view
  beforeEach(module('html5editorApp'));
  beforeEach(module('app/editor/editor.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<editor></editor>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
