var should = require("should");
var mapBuilder = require("../../lib/map-building.js");

describe("findOrCreateNode", function() {
  it("should return new node if node does not exist", function() {
    var map = mapBuilder.newMap();
    mapBuilder.findOrCreateNode(map, 10);
    should(map.nodes[10]).not.equal(undefined);
    should(map.nodes[33]).equal(undefined);
  });

  it("should return node if node does exist", function() {
    var map = mapBuilder.newMap();
    mapBuilder.findOrCreateNode(map, 10);
    mapBuilder.findOrCreateNode(map, 10);
    should(map.nodes[10]).not.equal(undefined);
    should(map.nodes[33]).equal(undefined);
  });
});
