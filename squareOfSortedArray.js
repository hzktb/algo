// given a sorted array input, return the squared value of the sorted array and the result must be sorted as well (increasing order)
// normal approach: square each element first, then call sorting method, run time T(N) = N + NlogN

// optimal approach: using two pointers method and start from both end of the input array. Initialize a result array with length of the input array
// starting from the end index of the result array, compare the squared value of the two pointers, the larger value will go into the result array
// then proceed with the pointer

var sortedSquares = function (nums) {
  let res = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (let i = res.length - 1; i >= 0; i--) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      res[i] = nums[left] ** 2;
      left++;
    } else {
      res[i] = nums[right] ** 2;
      right--;
    }
  }
  return res;
};

console.log(sortedSquares([-12, 1, 2, 5, 8]));
