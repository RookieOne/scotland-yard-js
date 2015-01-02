var should = require("should");
var _ = require("underscore");
var game = require("../../index.js");

describe("Node #52", function() {
  it("should have correct connections", function() {
    var node = game.nodes[52];
    var toNode40 = _.findWhere(node.connections, { number: 40 });
    should.exist(toNode40);
  });
  it("should not have incorrect connections", function() {
    var node = game.nodes[52];
    var toNode40 = _.findWhere(node.connections, { number: 11 });
    should.not.exist(toNode40);
  });
});
