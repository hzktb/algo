// leetcode 98

// given a root of a BST, validate the BST to make sure it satisfies the conditions for BST
// left node and all the values in the left tree is smaller than the root node, right node and all the nodes in right tree is
// larger than the root node (also applies to eahc sub root node)

// we know that each node in the subtree is either greater than or smaller than the current root node depending on the left or right
// as we traverse down the subtree, we will update the min and max boundaries for each node so if the node.val exceeds the range, we know we can retunr false;
// if we traversed to the bottom (below leaf node) we can return true;
// if we traverse down left, we can keep updating the max and leave min alone
// if we traverse down right, we can keep updating the min and leave max alone

const validate = (root) => {
  return valid(root, Infinity, -Infinity);
};

const valid = (root, max, min) => {
  if (root === null) return true;

  if (root.val <= min || root.val >= max) {
    return false;
  } else {
    return valid(root.left, root.val, min) && valid(root.right, max, root.val);
  }
};
