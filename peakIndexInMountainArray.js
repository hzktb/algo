// the mountain array will increase from i = 0 to some index that is less than the last index of the array
// the mountain array will increase from j = arr.length - 1 to an index that is greater than the first index of the array
// the least numbers in the array is 3

// given a mountain array, find the peak index of the array

const binarySearchMethod = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log(binarySearchMethod([1, 2, 3, 5, 100, 80, 79, 72, 3, 1]));
