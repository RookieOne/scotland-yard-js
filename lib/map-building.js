var newMap = function() {
  return {
    nodes: [],
    connections: []
  }
}
module.exports.newMap = newMap;

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
module.exports.findOrCreateNode = findOrCreateNode;

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
module.exports.createConnection = createConnection;
