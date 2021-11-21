// leetcode 27
// given an array and a value, remove that value in the array and return the modified length of that "new array"

// use two pointers, i and j
// if i !== j, let nums[i] = nums[j], then increment both i and j
// if i === j, skip the current j
// return i since it will be at the last element replaced, no plus 1 because we replace first, then increment

const removeElement = (nums, val) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

// this method works since i will either be at an element that is equal to val or that element is useless in reference
// unless it's at the beginning of the array and i and j will both traverse to the first element that is equal to val
