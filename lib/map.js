var mapBuilder = require("./map-building.js");

var map = mapBuilder.newMap();

mapBuilder.createConnection(map, "taxi", 51, 39);
mapBuilder.createConnection(map, "taxi", 51, 52);
mapBuilder.createConnection(map, "taxi", 52, 39);
mapBuilder.createConnection(map, "taxi", 52, 40);
mapBuilder.createConnection(map, "taxi", 52, 69);

mapBuilder.createConnection(map, "bus", 52, 86);

module.exports = map;
