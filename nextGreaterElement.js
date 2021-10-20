// 2 inputs, nums1 and nums2
// nums1 is a subset of nums2 which means nums2 contains all elements in nums1 (might not be the same order)
// goal: for each element of nums1, find the next greater number in nums2
// ex: nums1 = [1,2,3] nums2 = [5,3,7,1,8,2] (every number in the inputs is unique)
// ans = [8,-1,7] if there is no answer for an element, set it as -1

// first normal approach: double for loop O(n^2) time
// for each nums1 element, iterate thru the nums2 array starting from the index (no indexOf) the nums1 element is at in nums2 and end with the next larger number in nums2
// ex: nums1 = [1] nums2 = [0,1,2] the index of 1 would be 1 in nums2, the inner loop will break at 2 because it is the next larger number

// second normal approach: double for loop with a map for better index lookup time, O(n^2) time complexity overall
// first will loop thru the nums2 to get each element's index number so when iterating nums1 the search time to start at the index would be faster
// this is a better approach in real life than approach 1

// optimal approach: using monotonic stack and map, O(n + m) time complexity
// the stack will be storing elements that is greater than the current top element, that is, if the top element is smaller, it will be popped and the current element will be pushed in
// if stack is empty, we have to push the current element in because there is no comparison, and we know for that element, it's answer will be -1 because if there is a greater number after it, the stack wouldnt be empty
// the map will be storing the answers to each element as we are iterating thru nums2. if stack is empty, we store current element in the map with value of -1, if the current element is smaller than top element, then we store it in map with value -1
// the iteration for nums2 will start from the back

const nextGreaterElement = (nums1, nums2) => {
  let stack = [];
  let map = new Map();

  for (let i = nums2.length - 1; i >= 0; i--) {
    // iterate thru nums2 backward
    while (stack.length !== 0 && nums2[i] >= peek(stack)) {
      // if stack is not empty so we know we have elements from the back of nums2 to compare with, and if the current number is greater, it is certain that current number could potentially be the next greater number to all elements in front of current number
      stack.pop(); // we can pop the current top because it is not useful anymore
    }
    if (stack.length === 0) {
      // if stack is empty, there is nothing to compare for the current element, and it also means there is no next greater number for the current element so the answer to the current number is -1 and we push it into the stack because it can be a potential next greater number for other element in front of it
      map.set(nums2[i], -1);
      stack.push(nums2[i]);
    } else if (nums2[i] < peek(stack)) {
      // the stack is not empty and the while loop either didnt run or terminated, we know that we have found a actual number that has the next greater number which is the top element of the stack
      map.set(nums2[i], peek(stack)); // so we set the answer of the current element of the top element of the stack
      stack.push(nums2[i]); // push the current element to the stack because it could be a next greater number for other elements in front of it
    }
  }

  for (let element in nums1) {
    // after we done iterating the nums2, we can construct our answer. we iterate thru the nums1 and since the question says its a subset of nums2, we know for sure each element in nums1 is stored in the maps with a answer value
    let ans = map.get(nums1[element]); // we get that value with the key which is the current element in nums1
    nums1[element] = ans; // and we replace the current element with the answer it corresponds to in the map
  }
  return nums1;
};

const peek = (stack) => {
  // peek function used to easily loop up the top element of the stack
  return stack[stack.length - 1];
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
