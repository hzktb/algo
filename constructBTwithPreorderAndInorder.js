// given two arrays preorder and inorder
// construct the binary tree based on the two arrays

// the first element in the preorder is always the current root of the binary tree
// we then use that root to find the index of that root in the inorder array
// from there, we slice the inorder array into left and right with the root index in the middle
// we then know that the number of elements of the left and right in the inorder array and that numbers of elements is used
// to slice out the left and right subarray in the preorder
// ex: inorder = [1,2,3,4,5], preorder = [3,1,2,4,5], root is 3, we cut the inorder into [1,2], [4,5], we then can cut out the
// same array in the preorder by using the index of the root of the inorder as our reference

class TreeNode {
  constructor(val, left, right) {
    this.val = val !== undefined ? val : null;
    this.left = left !== undefined ? left : null;
    this.right = right !== undefined ? right : null;
  }
}
const construct = (preorder, inorder) => {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  // find the index of the root inside the inorder
  let index = inorder.indexOf(preorder[0]);
  // create the root
  let root = new TreeNode(inorder[index]);

  // slicing out the subarrays
  // if the length of the preorder is 1, that means we dont need to slice, just let the sliced array be empty and it will
  // be returned null in the next recursive call
  let leftPreorder = preorder.length !== 1 ? preorder.slice(1, index + 1) : [];
  let rightPreorder =
    preorder.length !== 1 ? preorder.slice(index + 1, preorder.length) : [];
  let leftInorder = inorder.length !== 1 ? inorder.slice(0, index) : [];
  let rightInorder =
    inorder.length !== 1 ? inorder.slice(index + 1, inorder.length) : [];

  root.left = construct(leftPreorder, leftInorder);
  root.right = construct(rightPreorder, rightInorder);

  return root;
};
