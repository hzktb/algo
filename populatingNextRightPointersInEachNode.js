// given a root, for each node, let its next pointer point to the right node of the same level
// at default, each next pointer is pointing to null

// using preorder traversal to first operate on the root node, then traverse down the left and right node to perform
// same operation

const nextRightPointer = (root) => {
  // base case when if root is null or the child nodes are null, we can return because we have reached the bottom of the BT
  if (root === null || root.left === null || root.right === null) return root;

  // let the root.left's next pointer point to the root.right node
  root.left.next = root.right;
  // we have to check if the root.next is pointing to any node, if no, that means it's either the top root node
  // or the current root node is at the very right side of the tree so its next pointer is pointing to null
  root.right.next = root.next ? root.next.left : null;

  // preorder traversal template
  nextRightPointer(root.left);
  nextRightPointer(root.right);
  return root;
};
