const test = require("../lib/testing.js");
const square = require("../src/square.js");

const testSquare = function() {
  test.assertEquality("****\n****\n****\n****\n", square.square(4), 'should give square of given length');
}

testSquare();
