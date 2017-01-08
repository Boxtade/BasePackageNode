var assert = require('assert');
var func = require("../../src/core/function");

suite('Unit Test : function.js', function() {
    const ONE_NUMBER = 5;
    const NEGATIVE_NUMBER = -5;
    const ERROR_ROOTSQUARE_NUMBER = -1;

    setup(function() {
    });

    test('givenANumber_whenICalculateTheSquareOfNumber_thenShouldHaveTheSquareOfNumber', function() {
        var square = func.square(ONE_NUMBER);
        assert.equal(ONE_NUMBER*ONE_NUMBER,square);
    });

    test('givenANumber_whenICalculateTheRootSquareOfNumber_thenShouldHaveTheRootSquareOfNumber', function() {
        var root_square = func.root_square(ONE_NUMBER);
        assert.equal(Math.sqrt(ONE_NUMBER),root_square);
    });

    test('givenANegativeNumber_whenICalculateTheRootSquareOfNumber_thenShouldHave-1', function() {
        var root_square = func.root_square(NEGATIVE_NUMBER);
        assert.equal(ERROR_ROOTSQUARE_NUMBER,root_square);
    });

});