// leetcode 538, 1038
// given a BST, return the tree with each node of the value of the sum of all node.val that is greater than or equal to current node.val

// similar to the kth smallest value in binary search tree, we use inorder traversal
// however, we go from right to left because the very right of the tree is always the greatest, and the very left is the smallest
// we can traverse from right to left, and maintain a sum variable to keep track of the current sum by adding current sum + node.val
// because we are adding all the values that is greater than or equal to the current node, we dont need to consider if it's less than
// or not because we are guaranteed to see node.val that is greater or equal to the current val based on the traversal method
// this ensures that when we get to the very left side of the node, the sum is going to be sum of all nodes to the right of it

const convert = (root) => {
  let sum = 0;

  const traverse = (root) => {
    // base case when we reached the bottom
    if (root === null) return;

    // template for inorder traversal, notice we go from right to left instead of left to right for this problem
    traverse(root.right);
    sum += root.val; // add the current val to sum as it is equal or greater than to itself
    root.val = sum; // replace current node.val with sum
    traverse(root.left);
  };
  traverse(root);
  return root;
};
