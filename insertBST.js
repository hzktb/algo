// leetcode 701
// given a root of a BST and a val, insert the val as a new node in the BST and the tree would still satisfy as BST

// using preorder traversal similar to the search BST and insert the node as a leaf node

class TreeNode {
  constructor(val, left, right) {
    this.val = val !== undefined ? val : null;
    this.left = left !== undefined ? left : null;
    this.right = right !== undefined ? right : null;
  }
}
const insert = (root, val) => {
  if (root === null) {
    let node = new TreeNode(val);
    return node;
  }

  // traversal template
  if (root.val > val) {
    root.left = insert(root.left, val);
  } else if (root.val < val) {
    root.right = insert(root.right, val);
  }

  return root;
};
