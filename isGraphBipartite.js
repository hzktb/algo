// leetcode 785
// given a graph, find if the graph can be constructed as a Bipartite
// Bipartite is a graph that the nodes connected are different from each other
// example: node 1 is connected to 2 and 3, 2 is not connected to 3, to become a bipartite, 1's value will be opposite of
// 2 and 3
// if 2 and 3 is connected, it is impossible to be a bipartite because 1 has to be opposite of 2 and 3 and 2 has to be opposite of
// 1 and 3 and 3 has to be opposite of 1 and 2

// use DFS to traverse every node
// using a color array with length of the graph's length filled with false to keep track of the nodes, if any adjacent nodes are
// the same, then it means we dont have a bipartite

let visited = []; // keep track of DFS, needed for template
let color = []; // keep track of the nodes' color (true or false as the color)
let isIt = true; // answer, if adjacent nodes equal, then this will be false;

const isBipartite = (graph) => {
  color = new Array(graph.length).fill(false);
  visited = new Array(graph.length).fill(false);
  for (let i = 0; i < graph.length; i++) {
    // iterate every node as a beginning node to ensure no nodes are skipped
    traverse(graph, i);
  }
  return isIt;
};

const traverse = (graph, curNode) => {
  if (!isIt) return; // check if we already figured out a sub graph is not bipartite

  visited[curNode] = true; // mark the current node as visited;

  // template for graph traverse
  for (let j of graph[curNode]) {
    // check if the adjacent node is visited yet
    if (!visited[j]) {
      // if not visited, we mark it opposite color as the current node
      color[j] = !color[curNode];
      // then we traverse down the j node
      traverse(graph, j);
    } else {
      // if visited already, check if this node is same color as current node
      if (color[j] === color[curNode]) {
        isIt = false;
      }
    }
  }
};
