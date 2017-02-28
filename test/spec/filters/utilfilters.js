'use strict';

describe('Filter: utilFilters', function () {

  // load the filter's module
  beforeEach(module('freeApp'));

  // initialize a new instance of the filter before each test
  var utilFilters;
  beforeEach(inject(function ($filter) {
    utilFilters = $filter('utilFilters');
  }));

  it('should return the input prefixed with "utilFilters filter:"', function () {
    var text = 'angularjs';
    expect(utilFilters(text)).toBe('utilFilters filter: ' + text);
  });

});
