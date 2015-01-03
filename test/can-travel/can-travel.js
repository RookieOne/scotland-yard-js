var should = require("should");
var _ = require("underscore");
var game = require("../../index.js");

describe("canTravel", function() {
  it("should return true if connection has taxi path", function() {
    var result = game.canTravel(52, 40, "taxi");
    result.should.equal(true);
  });
  it("should return false if fromNodeNumber doesn't exist", function() {
    var result = game.canTravel(1152, 40, "taxi");
    result.should.equal(false);
  });
  it("should return false if toNode isn't a connection", function() {
    var result = game.canTravel(52, 42, "taxi");
    result.should.equal(false);
  });
  it("should return false if connection has wrong path", function() {
    var result = game.canTravel(52, 40, "underground");
    result.should.equal(false);
  });
});
