// given a binary searh tree and a value k, return the kth smallest value in the binary search tree

// binary search tree is a root and the left child is smaller than root and right child is greater than root
// the binary search tree has a characteristic that when traversing with inorder traversal, the order of nodes traversed back is
// going to be sorted from smallest to largest
// we can traverse the BST with inorder, then for each node we visited backup, we will record the number of how many nodes
// we have returned back up, and since inorder traversal traverses the node in a sorted mannor, when k = the record number
// we have found the right root node

const kthSmallest = (root, k) => {
  let n = 0;
  let res = 0;

  const traverse = (root, k) => {
    if (root === null) return;

    traverse(root.left, k);
    n++;
    if (n === k) {
      res = root.val;
    }
    traverse(root.right, k);
  };

  traverse(root, k);
  return res;
};
