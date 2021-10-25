// Write a function:  function solution(A);  that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.  For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.  Given A = [1, 2, 3], the function should return 4.  Given A = [−1, −3], the function should return 1.

// solution 1. sort the array first and then put it in a set (so no duplicates, and also eliminate anything that's negative), then loop thru the sorted array with increment of 1, if the current element doesnt equal to the current index + 1, then we know the array is not continuous, and we can return that index + 1 because it is the smallest positive integer.

// solution 2: my solution
// initialize a set and a result variable with value of 1. iterate thru the array and if the element is in the set or the element is negative, skip it.
// then we iterate thru the set while result is in the set, and each iteration we increment result by 1 until the result is not in set, then we can return the result

const smallestPositive = (arr) => {
  let set = new Set();
  let result = 1;

  for (let i of arr) {
    if (set.has(i) || i <= 0) {
      continue;
    }
    set.add(i);
  }

  while (set.has(result)) {
    result++;
  }

  return result;
};

console.log(smallestPositive([1, 3, 6, 4, 1, 2]));
