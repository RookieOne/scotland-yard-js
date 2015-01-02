nodes = [];

var createConnection = function(pathType, nodeNumber) {
  return { pathType: pathType, number: nodeNumber };
};

nodes[52] = {
  connections: [
    createConnection("yellow", 39),
    createConnection("yellow", 40)
  ]
};

module.exports = nodes;
