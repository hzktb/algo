// leetcode 26
// given a sorted array, modify the array and remove the duplicates, and keep the elements in order
// return the length of the array after duplicates been removed

// use two pointer method, i and j
// if i and j are the same, j will traverse
// if i and j are not the same, i will increment by 1 then replace nums[i] with nums[j]

const removeDuplicate = (nums) => {
  if (!nums) return 0;

  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }
  return i + 1; // return the length of the array after remove duplicates and have all the non duplicate values move to the front
};
