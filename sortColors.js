// leetcode sort colors
// sorting colors red, while, blue represented as 0, 1, 2
// using two pointer to indicate the left bound and right bound
// numbers left to the left bound will always be 0, numbers right to the right bound will always be 2
// numbers in the middle will always be 1

const sortColors = (arr) => {
  if (arr.length <= 1) return arr;

  let left = 0;
  let right = arr.length - 1;
  let i = 0;

  const swap = (i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  while (i <= right) {
    // we still need to check when the i is at right pointer since it's the last number that needs to be checked out before the loop ends
    if (nums[i] === 0) {
      // if the number is 0, it goes to the left of the left pointer (swap with the left pointer, and increment the pointer)
      swap(i, left);
      left++;
    } else if (nums[i] === 2) {
      // if the number is 2, it goes to the right of the right pointer (swap with right pointer, and decrement the pointer)
      swap(i, right);
      right--;
      i--; // when swaping the right pointer with i, we need to check i with left pointer again to make sure the i is not 0, so i needs to stay
    }
    i++; // increment i at each iteration besides when i swaps with right pointer where i will stay
  }
  return arr;
};
