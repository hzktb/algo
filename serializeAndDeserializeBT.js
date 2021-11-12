// given a binary tree, serialize it into a string and deserialize it back into the
// original binary tree

// declare an empty string called res and using preorder traversal to add the node's val
// with a comma after it (for string split in deserialize). if node is null, we add # to the stirng

class TreeNode {
  constructor(val, left, right) {
    this.val = val !== undefined ? val : null;
    this.left = left !== undefined ? left : null;
    this.right = right !== undefined ? right : null;
  }
}
const serialize = (root) => {
  let res = "";

  const traverse = (node) => {
    // base case when the node is null, we add # in place to indicate the end of the route
    if (node === null) {
      res += "#,";
    }
    // preorder traversal template
    res += node.val + ",";
    traverse(node.left);
    traverse(node.right);
  };
  return res;
};

const deserialize = (string) => {
  let nodes = string.split(",");
  // split the nodes with "," and it will work as a queue (first in first out)

  const build = (nodes) => {
    // take out the first element in the queue so when we later build the left and
    // right branches we only pass in the elements of the branch instead of the
    // whole nodes array;
    let head = nodes.shift();

    // base case when the element is null
    if (head === "#") {
      return null;
    }
    // if not null, create the node and build the left and right with preorder traversal
    let root = new TreeNode(Number(head));
    // pass in the modified nodes (only child nodes elements) array into the recursive call
    root.left = build(nodes);
    root.right = build(nodes);

    return root;
  };
  return build(nodes);
};
