// leetcode 797
// given a graph in matrix form, find all paths from start node to end node

// using depth first search and keep track of a path for back tracking

let res = [];
const find = (graph) => {
  let path = [];
  traverse(graph, 0, path); // 0 is the first node in the graph
  return res;
};

const traverse = (graph, curNode, path) => {
  path.push(curNode);

  if (curNode === graph.length - 1) {
    // if current node is the last node in the graph
    res.push([...path]); // push the result path to res
    path.pop(); // pop the last node (in this situation the last node in the graph) from path and return (back tracking)
    return;
  }

  for (let i of graph[curNode]) {
    // iterate thru the subarray of curNode (the map was represented in matrix format, the curNode is the index and the node itself)
    traverse(graph, i, path);
  }
  path.pop();
};

console.log(find([[1, 2, 3], [2], [3], []]));
