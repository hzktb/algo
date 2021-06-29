function TreeNode(val, left, right) {
  this.val = val;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

var sortedArrayToBST = function (nums) {
  return toBST(nums, 0, nums.length - 1);
};

function toBST(nums, start, end) {
  if (end < start) {
    return null;
  }
  let mid = Math.ceil((end + start) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = toBST(nums, start, mid - 1);
  root.right = toBST(nums, mid + 1, end);
  return root;
}

console.log(sortedArrayToBST([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
