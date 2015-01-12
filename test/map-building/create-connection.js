var should = require("should");
var mapBuilder = require("../../lib/map-building.js");

describe("createConnection", function() {
  it("should create connection", function() {
    var map = mapBuilder.newMap();
    mapBuilder.createConnection(map, "taxi", 10, 20);

    should(map.nodes[10]).not.equal(undefined);
    should(map.nodes[20]).not.equal(undefined);

    var connection = map.connections[0];
    should(map.connections.length).equal(1);

    var fromNode = map.nodes[10];
    should(fromNode.connections[0].number).equal(20);

    var toNode = map.nodes[20];
    should(toNode.connections[0].number).equal(10);
  });
});
