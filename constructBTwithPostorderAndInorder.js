// given 2 arrays, the arrays are the result of postorder traversal and inorder traversal of a binary tree
// construct the tree based on the two arrays

// similar to construct with preorder and inorder traversal
// instead of the root being the first element of the preorder, in the postorder the root is the last element

class TreeNode {
  constructor(val, left, right) {
    this.val = val !== undefined ? val : null;
    this.left = left !== undefined ? left : null;
    this.right = right !== undefined ? right : null;
  }
}

var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null;

  let index = inorder.indexOf(postorder[postorder.length - 1]);
  let root = new TreeNode(inorder[index]);

  let leftInorder = inorder.length !== 1 ? inorder.slice(0, index) : [];
  let rightInorder =
    inorder.length !== 1 ? inorder.slice(index + 1, inorder.length) : [];
  let leftPostorder = postorder.length !== 1 ? postorder.slice(0, index) : [];
  let rightPostorder =
    postorder.length !== 1 ? postorder.slice(index, postorder.length - 1) : [];

  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);

  return root;
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
