// given a binary tree, invert the left and right node for each level
// using pre order traversal to invert the left and right child nodes and then traverse to the left and right node to perform the
// same method

const invertTree = (root) => {
  // base case when it is at the bottom of the tree
  if (root === null) return null;

  // swap the left and right child nodes
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // this is the preorder binary tree traversing template
  // visit the left node then the right node
  // the manipulation of the root is above these two traversing operations
  invertTree(root.left);
  invertTree(root.right);
  // lastly remember to return the root to get the answer
  return root;
};
