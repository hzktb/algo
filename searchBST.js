// leetcode 700
// given a root of a binary search tree and a val, find that node in the binary search tree and return that node as the root

// using preorder traversal to search down the binary search tree, with the tweek that before each traverse we will compare
// the root.val to the input val and determine which side we traverse down

const search = (root, val) => {
  if (root === null) return null;

  if (root.val === val) return root;
  if (root.val < val) {
    root = search(root.right, val);
  } else if (root.val > val) {
    root = search(root.left, val);
  }

  return root;
};
