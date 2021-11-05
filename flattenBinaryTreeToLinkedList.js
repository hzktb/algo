// given a root of binary tree, flatten the nodes so that the binary tree is a linked list going down to the root.right
// traverse the root.left and replace it to the root.right then connect root.right to the root.left.right
// ex root = 1; root.left = 2; root.right = 3 => ans root = 1; root.left = null; root.right = 2; root.right.right = 3;

// using post order traversal, traverse down the left, then at the bottom, traverse to the right
// make a copy of root.left and root.right, then replace root.right with root.left, then at the leaf node of the new root.right,
// connect it with original root.right

const flatten = (root) => {
  // base case when we are at the bottom of the tree
  if (root === null) return;

  // post order traversal template
  flatten(root.left);
  flatten(root.right);

  // make a copy of root.left
  let left = root.left;
  // make a copy of root.right
  let right = root.right;

  // replace the root.left with null
  root.left = null;
  // replace the root.right with the copy of root.left
  root.right = left;

  // set a pointer starting at current root and traverse down the root.right to the bottom so we know at which leaf node we
  // can connect the original root.right
  let pointer = root;
  while (pointer.right !== null) {
    pointer = pointer.right;
  }

  // once the while loop finish, we know we are at the bottom, then we connect the original right and the leaf node
  pointer.right = right;

  return root;
};
