// given a root of binary tree and treenode p and treenode q, find the lowest common parent node for treenode p and q
// the treenode can be under another treenode, that is p can be inside the child branch of q or vice-versa
// there will always be a solution in the given inputs

// using postorder traversal to find the nodes p and q in the binary tree, then when popped back up each level we will compare
// the left and right to see if they are null or not

class TreeNode {
  constructor(val, left, right) {
    this.val = val !== undefined ? val : null;
    this.left = left !== undefined ? left : null;
    this.right = left !== undefined ? right : null;
  }
}
const lowestCommonAncester = (root, p, q) => {
  // base cases
  if (root === null) return null; // if we are at the bottom, that means the q or p node doesnt exist in this route
  if (root === p || root === q) return root; // if current root is the p or q, we will return the root back up, notice we compare root to p and q, not the root.val

  // post order traversal template
  let left = lowestCommonAncester(root.left, p, q);
  let right = lowestCommonAncester(root.right, p, q);

  // post order operation at root node
  // each pop of the call stack we will compare the left and right node to see if they are p q, or null

  // if when popped back up, left and right are null, we know the p q is not in this branch
  if (left === null && right === null) {
    return null;
  }
  // if both left and right is not null, we know we found both p and q that means the current node we are at must be the lowest parent node
  // because postorder traversal operates the child branch first, then back up one level to the nearest parent node
  // notice we are comparing if its not null because left can be either p or q and so is the right
  if (left !== null && right !== null) {
    return root;
  }
  // last case when either left or right is null, we return the non-null branch up the call stack
  return left === null ? right : left;
};
