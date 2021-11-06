// given an array, contruct a binary tree so that the root is the largest node in the tree and each child node is smaller than the root node

// using preorder traversal
// before traversing, find the local max and its index within the range of low and high, then construct the node, then for the
// left and right child, call the function again and pass down the new ranges accordingly

// defining the TreeNode
class TreeNode {
  constructor(val, left, right) {
    this.val = val !== undefined ? val : null;
    this.left = left !== undefined ? left : null;
    this.right = right !== undefined ? right : null;
  }
}

const constructMaxBinaryTree = (arr) => {
  // call a helper function to construct the tree
  // the initial parameters we pass in is the array, the left and right boundary of the array
  // notice that the boundaries are inclusive for the array
  return build(arr, 0, arr.length - 1);
};

// helper function, takes in the array and the left and right boundaries for the local max we want to find in that range
const build = (arr, low, high) => {
  // base case, when the low is greater than high, not when low >= high because we still need to check that number even
  // when the low and high is at the same position
  // it is guaranteed that it will go out of bound because when we call the function recursively, we set the index - 1 and index + 1
  // so eventually it will be out of bound
  // if low > high, that means there are no elements to check anymore, we can return null as it is the null node for the leaf node
  if (low > high) return null;

  // initialze the local max and index variable for the current root of the branch
  let max = -Infinity;
  let index = 0;
  // the end condition is <= because we are passing in the high parameter inclusively in the traversal call
  for (let i = low; i <= high; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  let root = new TreeNode(max);

  // here we are passing in the ranges inclusively
  // inclusively means that instead of passing in the index, we pass in index - 1 or index + 1, because the index is already
  // the root for the current branch
  // this is also the template for pre-order traversal
  root.left = build(arr, low, index - 1);
  root.right = build(arr, index + 1, high);

  return root;
};
