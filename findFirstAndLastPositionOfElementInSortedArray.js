// given a sorted array of numbers, find the first and last position of a target in the array
// ex: input = [1,2,3,3,3,5] target=3, result = [2,4];

// solution: use binary search to find the left bound and right bound of the target in the array

const findFirstAndLast = (arr, target) => {
  let result = [-1, -1];

  // find the left bound (right inclusive method)
  let left = 0;
  let right = arr.length - 1;
  // the <= in the while is for when using inclusive binary search
  while (left <= right) {
    // declare the mid
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] < target) {
      // inclusive has to be mid + 1 for left
      left = mid + 1;
    } else if (arr[mid] > target) {
      // inclusive has to be mid - 1 for right;
      right = mid - 1;
    } else if (arr[mid] === target) {
      // the core for left bound search,
      // if we found the target, that means we are within range, and we can squeeze the right pointer closer
      // inclusive so we can do mid - 1 for right pointer (it means not consider mid anymore)
      right = mid - 1;
    }
  }

  // change the first element of result, also consider if the target was not in the array and the while loop terminated
  // that means we didnt find the target, we have to set it to -1;
  // also consider when left pointer is at arr.length instead of arr.length - 1 (out of bound)

  if (arr[left] !== target || left > arr.length - 1) {
    result[0] = -1;
  } else {
    result[0] = left;
  }

  // right bound binary search
  // re-initilize the poiners
  left = 0;
  right = arr.length - 1;

  // right bound search
  // <= for inclusive binary search
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] < target) {
      // mid + 1 for inclusive left pointer
      left = mid + 1;
    } else if (arr[mid] > target) {
      // mid - 1 for inclusive right pointer
      right = mid - 1;
    } else if (arr[mid] === target) {
      // core logic for right bound search, squeeze in the left pointer if we found the target but not consider mid as our bound anymore
      left = mid + 1;
    }
  }

  // consider the case when we didnt find the target and the while loop was terminated
  // the left pointer will be to the right of right pointer
  // also consider when right pointer actually when over 0 to index -1
  if (arr[right] !== target || right < 0) {
    result[1] = -1;
  } else {
    result[1] = right;
  }

  return result;
};

console.log(findFirstAndLast([1, 1, 2, 3, 4, 4, 5, 6, 6, 6, 6, 7], 4));
