// leetcode 410
// given an array and value m, minimize the max sum of the array that is divided in to m subarrays
// ex: [1,2,3,4,5] m = 2 => divide [1,2,3,4,5] into 2 subarrays and make the sum of the array as small as possible
// cannot rearrange the orders. answer = 9, cut at 3, [1,2,3] and [4,5] smallest max sum is 9

// using left most binary search to find the smallest possible max sum
// the smallest possible sum for any array is the largest number in the array (left boundary)
// the largest possible sum of any array is the sum of all elements in the array (right boundary)
// with a random pick between the two boundaries, we can split it into x subarrays
// using a helper function to find the minimum subarrays we can split into
// if the number of splited subarray is equal or less than the targest subarray, we know that the sum is a little bit big
// we need to shrink the right boundary (right = mid);
// if the number of splited subarray is greater than the limit, we know the current max is a little too small
// we need to shrink the left boundary (left = mid + 1);
// then we will shrink to the very last one of the search, we return left (left most binary search)

const splitArray = (nums, m) => {
  let left = findMax(nums); // the left boundary is the max in the array
  let right = sumMax(nums); // the right boundary is the sum of all elements in the array

  // left most binary search template
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    let sections = split(nums, mid);
    if (sections <= m) {
      // when max is right or a little too big
      right = mid;
    } else {
      // when max is too small
      left = mid + 1;
    }
  }

  return left;
};

const split = (nums, max) => {
  let sections = 1; // the minimum sections can be divided to is 1 for any given array
  let localMax = 0; // keep track of the sum of elements we have traversed

  // this is a greedy algorithm, it will add as many elements into localMax until it cant add anymore
  for (let i = 0; i < nums.length; i++) {
    if (localMax + nums[i] > max) {
      // when we are going to reach the max limit for a subarray
      sections++; // increment the sections because we need to start a new subarray
      localMax = nums[i]; // initialize the current element as the first number in the new imaginary subarray
    } else {
      // havent reached the max limit for the subarray
      localMax += nums[i];
    }
  }
  return sections; // returns the minimum number of subarrays with current max
};

// helper function to find the max in the array
const findMax = (nums) => {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
  }
  return max;
};

// helper function to find the sum of the array
const sumMax = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};
