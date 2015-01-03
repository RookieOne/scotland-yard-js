var nodes = [];

var createConnection = function(pathType, nodeNumber) {
  return { pathType: pathType, number: nodeNumber };
};

nodes[52] = {
  connections: [
    createConnection("taxi", 39),
    createConnection("taxi", 40),
    createConnection("bus", 86),
  ]
};

module.exports = nodes;
