// leetcode 283
// given an array, move all zeros in the array to the end

// use two pointers i and j
// basically using the removeElement function to remove zeros, then starting from i pointer,
// replace the rest of the array

const removeElement = (arr, val) => {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
  }
  return i;
};

const moveZero = (arr) => {
  let start = removeElement(arr, 0);

  while (start < arr.length) {
    arr[start] = 0;
  }
  return arr;
};
