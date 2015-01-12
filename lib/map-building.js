var newMap = function() {
  return {
    nodes: [],
    connections: []
  }
}

var findOrCreateNode = function(map, nodeNumber) {
  var node = map.nodes[nodeNumber];
  if (node !== undefined) {
    return node;
  }

  var newNode = {
    connections: []
  };
  map.nodes[nodeNumber] = newNode;
  return newNode;
}

var createConnection = function(map, pathType, fromNumber, toNumber) {
  var fromNode = findOrCreateNode(map, fromNumber);
  fromNode.connections.push({ pathType: pathType, number: toNumber });

  var toNode = findOrCreateNode(map, toNumber);
  toNode.connections.push({ pathType: pathType, number: fromNumber });

  map.connections.push({
    pathType: pathType,
    from: fromNumber,
    to: toNumber
  });
}

module.exports.newMap = newMap;
module.exports.findOrCreateNode = findOrCreateNode;
module.exports.createConnection = createConnection;
