var should = require("should");
var mapBuilder = require("../../lib/map-building.js");

describe("findOrCreateNode", function() {
  it("should return new node if node does not exist", function() {
    var nodes = [];
    mapBuilder.findOrCreateNode(nodes, 10);
    should(nodes[10]).not.equal(undefined);
    should(nodes[33]).equal(undefined);
  });

  it("should return node if node does exist", function() {
    var nodes = [];
    mapBuilder.findOrCreateNode(nodes, 10);
    mapBuilder.findOrCreateNode(nodes, 10);
    should(nodes[10]).not.equal(undefined);
    should(nodes[33]).equal(undefined);
  });
});
