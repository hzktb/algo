// given the root of a binary tree, find the route with the sum of the nodes been the largest

// maintain a max variable
// using postorder traversal to traverse down the left and right and then compare the result, then add it to max

const findMax = (root) => {
  let max = 0;

  const traverse = (root) => {
    // if at leaf node, just return the root.val back up the call stack
    if (root.left === null && root.right === null) return root.val;

    // post order traversal template
    let left = traverse(root.left);
    let right = traverse(root.right);
    // compares the left and right subtree and manipulate the global variable max
    if (left < right) {
      max += right;
    } else {
      max += left;
    }
  };

  traverse(root);
  return max;
};
