var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var sinon = require('sinon');
var generateSize = require('../helpers/generate-size');

describe('GenerateSizeKey', function() {
  var stream = { a: 1 };

  it('should add size key', function() {
    var callback = sinon.spy();
    generateSize(stream, callback);
    expect(stream).to.deep.equal({
      a: 1,
      size: 7
    });
    expect(stream).to.be.an('object');
  });

  it('should trigger the callback', function() {
    var callback = sinon.spy();

    generateSize(stream, callback);

    assert(callback.calledOnce);
    assert(callback.calledWith(null, stream));
  });
});
