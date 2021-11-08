// leetcode 450
// given a root of a BST, and a val, delete the node with the node.val equal to val and maintain the BST, return the root of the BST

// 3 conditions in deleting a node in the BST
// 1. the target node is a leaf node
// 2. the target node has a right or left child
// 3. the target node has two child nodes (left and right)

// 1. if the target node is a leaf node, just return null back up to the call stack as the null replaces the target in memory
// 2. if the target node has one child node, return that child node up the call stack as it replaces the target node in the memory
// 3. if the target node has two child nodes (hardest part)
// -- first make a copy of the minimum node in the right child branch or a max in the left child branch (with helper function)
// -- second go down the right branch and delete that node
// -- third change the copied node's left and right to the current node's left and right
// -- return the copied node

const deleteNode = (root, val) => {
  if ((root = null)) return null;

  if (root.val === val) {
    // when the current node is the target node
    if (root.left !== null && root.right !== null) {
      // hardest condition, write it here to save some typing for the later conditions
      let min = findMin(root.right); // find the min in the right branch, or find max in the left branch
      root.right = deleteNode(root.right, min.val); // go down the right branch and delete the min node
      min.left = root.left; // have the copy of min node's left and right equal to the root's left and right
      min.right = root.right;
      return min; // return the min node up the call stack (replaces the current node)
    } else if (root.left === null && root.right === null) {
      // when current node is a leaf node
      return null; // if it is leaf node, return null
    } else if (root.left !== null) {
      // when root.right is null
      return root.left; // if left was not empty and right is empty, return left
    } else if (root.right !== null) {
      // when root.left is null
      return root.right; // if right was not empty and left is empty, return right
    }
  } else if (root.val > val) {
    // when the current node is larger than target node
    return root.left;
  } else if (root.val < val) {
    // when the current node is less than the target node
    return root.right;
  }

  return root;
};

const findMin = (root) => {
  while (root.left !== null) {
    root = root.left;
  }
  return root;
};
