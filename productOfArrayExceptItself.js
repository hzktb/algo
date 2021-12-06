// leetcode 238
// given an array, find the product of the array except the current element itself

// using prefix sum
// maintain a res array with the length same as the length of the input array
// for each element in the array, we can maintain a left variable as the current product of all elements to the left of the current element
// ex: the product for all left elements at element 0 is 1, because there is no elements to the left of it
// but the products for all left eleements at element 1 is left * arr[i - 1]; then the new left will be left * arr[i - 1] as well
// update the left as we traverse right, only updates left when we are at second element and up;

// then we will iterate the arr backwards again and with the similar fashion, we can maintain a right variable to keep track of the product of all elements to
// the right of the current element
// ex: the product for all right elements at element num.length - 1 is 1, because there is no right elements to the last element
// then the product of the element num.length - 2 is current element in res * right
// keep in mind we have to update right as we traverse (only update when we are at the second last element and down). right = right * arr[i + 1];

const product = (arr) => {
  let res = new Array(arr.length);
  let left = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      left *= arr[i - 1];
    }
    res[i] = left;
  }
  let right = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i < arr.length - 1) {
      right *= arr[i + 1];
    }
    res[i] *= right;
  }
  return res;
};

console.log(product([1, 2, 3, 4]));
