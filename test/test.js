var assert = require('assert');

var calc = require('../src/calc');

// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Calculator Tests', function() {
	// And then we describe our testcases.
	it('returns 1+1=2', function(done) {
		assert.equal(calc.add(1, 1), 2);
		// Invoke done when the test is complete.
		done();
	});
// Comment here to show change
	it('returns 2*2=4', function(done) {
		assert.equal(calc.mul(2, 2), 4);
		// Invoke done when the test is complete.
		done();
	});
});