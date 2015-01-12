var should = require("should");
var mapBuilder = require("../../lib/map-building.js");

describe("newMap", function() {
  it("should return new map", function() {
    var map = mapBuilder.newMap();
    should(map.nodes).not.equal(undefined);
  });
});
