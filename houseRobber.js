var rob = function (nums) {
  // base cases
  if (nums.length === 0 || nums === null) return 0;
  if (nums.length === 1) return nums[0];

  // creating an empty array to store the data as it loops thru each nums item
  let arr = [];
  //initiate the arr with the first element of the nums
  arr[0] = nums[0];
  // checking to see if the rob should start with first or second element
  // if the arr[0] and arr[1] is the same, it means we start with the first house
  arr[1] = Math.max(nums[0], nums[1]);

  //the loop starts with the third house, we will check and see if adding the third house to the first house is better than the house we start on
  // example nums = [8,1,3,6]
  // arr = []; when we initiate the arr, it will be arr = [8,8] since 8 > 1;
  // next we look at 3, 8 + 3 is the first house + the next house we rob. 8 on the other side is the house we start with: 8 + 3 > 8 ? 8 + 3 : 8;
  for (let i = 2; i < nums.length; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i]);
  }
  // returns the last element of the arr since it will be the largest after the Math.max comparison logic
  return arr[arr.length - 1];
};

console.log(rob([8, 1, 2, 3, 5]));
