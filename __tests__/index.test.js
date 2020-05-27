"use strict";

var _lib = require("lib");

describe('removeDuplicateNumbers()', function () {
  test('removes dupes', function () {
    var dupes = [1, 2, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 7];
    var result = [1, 2, 3, 4, 5, 6, 7];
    expect((0, _lib.removeDuplicateNumbers)(dupes)).toEqual(result);
  });
});