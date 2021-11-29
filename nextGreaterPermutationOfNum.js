// given a number, return a permutation that is next greater than the numbe
// ex: 123 => 213;

const findPermutation = (num) => {
  // split it into array of strings
  num = String(num).split("");

  // first we need to find a number that we can swap
  // the idea is to find a number that is less than the number after it
  // we will traverse from right to left
  let i = num.length;
  for (i; i >= 0; i--) {
    // if the current number is larger than its left neighbor, that means that neighbor can be swapped
    if (num[i - 1] < num[i]) {
      break;
    }
  }
  // currently i is at the position where its neighbor is smaller than itself
  // next we will need to find a number in second half of the array that can swap with i - 1
  // the second half of the array is from i to num.length - 1
  // this number has to be the smallest value that is greater than i - 1
  let smallest = num.length - 1; // starting from the very last, we want the position of the number

  // starting from the last element, until we reach i (including i)
  for (let j = num.lenght - 1; j >= i; j--) {
    // the number we try to find has to be larger than i - 1 and smaller than the current smallest
    if (num[j] < num[smallest] && num[j] > num[i - 1]) {
      smallest = j;
    }
  }

  // next we will start swapping the two elements
  let temp = num[smallest];
  num[smallest] = num[i - 1];
  num[i - 1] = temp;

  // next we will need to sort the subarray
  let secondHalf = quickSort(num.splice(i)); // using splice to cut out the array to be sorted (modifies the array)

  // concatenate the array
  res = [...num, ...secondHalf].join("");

  return Number(res);
};

// helper function to sort the array
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(findPermutation(124053));
