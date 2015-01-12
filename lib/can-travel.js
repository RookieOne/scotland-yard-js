var map = require("./map.js");
var _ = require("underscore");

module.exports = function(fromNodeNumber, toNodeNumber, byPath) {
  var fromNode = map.nodes[fromNodeNumber];
  if (fromNode === undefined) {
    return false;
  }

  var toNode = _.findWhere(fromNode.connections, {
    pathType: byPath,
    number: toNodeNumber
  });
  if (toNode === undefined) {
    return false;
  }

  return true;
};
