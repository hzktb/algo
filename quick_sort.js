// quick sort implementation with no extra space

const quicksort = (arr, left = 0, right = arr.length - 1) => {
  // fist get the pivot of the current arr, this will be the middle of the array but after this call is done, the array will be slightly sorted
  // to where all elements larger than pivot is moved to the right, and elements smaller is moved to the left
  // it will be called multiple times until it gets down to only 1 element and then popped back up
  let pivot = partition(arr, left, right);

  // as long as the left and right pointers are not at the pivot yet
  if (left < pivot - 1) {
    // it will take pivot as the partition point and quicksort the subarray
    quicksort(arr, left, pivot - 1);
  }
  if (right > pivot) {
    // same here
    quicksort(arr, pivot, right);
  }

  // this also serves as the base case when there is only 1 element in the array where the pivot is also the left and right, just returns
  return arr;
};

// main part of the quicksort
const partition = (arr, left, right) => {
  // first get the pivot, middle of the arr
  let pivot = Math.floor((right + left) / 2);

  // then as long as the pointers are not intersecting (not including they met together)
  // we will keep incrementing left and right and swap the numbers that satisfies the condition of smaller to the left and greater to the right
  while (left <= right) {
    while (arr[left] < arr[pivot]) {
      left++;
    }
    while (arr[right] > arr[pivot]) {
      right--;
    }
    // swap the left and right, and also increment and decrement the left and right
    if (left <= right) {
      console.log(arr[right]);
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  // the left will be 1 spot to the right of the last swap, so all elements to the left of the left pointer are numbers less than the pivot
  // and the numbers starting at left until the end are numbers greater than pivot (including pivot)
  return left;
};

console.log(quicksort([15, 3, 9, 8, 5, 2, 7, 1, 6]));
