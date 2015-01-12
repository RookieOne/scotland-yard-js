var newMap = function() {
  return {
    nodes: []
  }
}

var findOrCreateNode = function(nodes, nodeNumber) {
  var node = nodes[nodeNumber];
  if (node !== undefined) {
    return node;
  }

  var newNode = {
    connections: []
  };
  nodes[nodeNumber] = newNode;
  return newNode;
}

var createConnection = function(map, pathType, fromNumber, toNumber) {
  var fromNode = findOrCreateNode(map, fromNumber);
}

module.exports.newMap = newMap;
module.exports.findOrCreateNode = findOrCreateNode;
module.exports.createConnection = createConnection;
