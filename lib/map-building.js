module.exports.findOrCreateNode = function(nodes, nodeNumber) {
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
