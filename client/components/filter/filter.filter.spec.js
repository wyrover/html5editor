'use strict';

describe('Filter: filter', function () {

  // load the filter's module
  beforeEach(module('html5editorApp'));

  // initialize a new instance of the filter before each test
  var filter;
  beforeEach(inject(function ($filter) {
    filter = $filter('filter');
  }));

  it('should return the input prefixed with "filter filter:"', function () {
    var text = 'angularjs';
  });

});
