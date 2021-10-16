// input of a binary array (elements with 1's and 0's), return the maximum number of consecutive ones appeared
// initialize a count variable to store the current count of ones, if encounters a 0, reset the count to 0
// initialize a max variable, if the current itrating element is 1, compare the value of max and count, then let max equal to the larger value

const maxConsecutiveOnes = (arr) => {
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count = 0;
    } else {
      count++;
      max = max > count ? max : count;
    }
  }
  return max;
};
