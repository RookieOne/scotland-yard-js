var nodes = require("./nodes.js");
var _ = require("underscore");

module.exports = function(fromNodeNumber, toNodeNumber, byPath) {
  var fromNode = nodes[fromNodeNumber];
  if (fromNode === undefined) {
    return false;
  }

  var toNode = _.findWhere(fromNode.connections, { pathType: byPath, number: toNodeNumber });
  if (toNode !== undefined) {
    return true;
  } else {
    return false;
  }
};
