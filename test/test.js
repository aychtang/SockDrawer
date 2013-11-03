'use strict';
var should = require('should');
var sockdrawer = require('../src/sockdrawer');

describe('Sanity test', function() {
	it('universe should work as expected', function(done) {
		(1+1).should.equal(2);
		done();
	});
});

describe('sockdrawer', function() {
	it('should be a function', function(done) {
		(typeof sockdrawer).should.equal('function');
		sockdrawer.should.be.an.instanceOf(Function);
		done();
	});
});
