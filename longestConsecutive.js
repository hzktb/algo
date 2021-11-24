// leetcode 128
// given an array, find the length of longest consecutive subarray (an array that have consecutive elements like [1,2,3,4])
// the order of the numbers are not sorted in the input array

// map the array into a Set for better look up time
// then for each element in the input array, find if it has a consecutive left and right neighbor and keep traversing left and right
// and deleting that number from the set until there is no more consecutive numbers in the set anymore
// then we compare the current max with the distance between next - pre - 1
// next - pre - 1 is basically meaning how many consecutive numbers are between next and pre
// -1 because the next and pre will stop at the first non consecutive number
// ex: [6,7,100], the pre will be at 5, next will be at 8, 8 - 5 = 3, 3 - 1 = 2;

const longestConsecutive = (arr) => {
  let max = 0;
  let set = new Set();
  // build the set for better search time
  for (let i of arr) {
    set.add(i);
  }

  // start traversing the arr and for each element, we will perform the left and right neighbor search
  for (let i of arr) {
    // check if set has the current element, if yes, do the left and right search
    if (set.has(i)) {
      let next = i + 1;
      let pre = i - 1;
      set.delete(i); // delete the i so it doesn't interfere with future left and right search for other elements
      // if current number is part of the longest consecutive subsequence, it will be used in this iteration and
      // if future other numbers that is also part of the subsequence it will terminate early because we already have it

      // right neighbor traverse and delete used elements along the way to reduce search time in the future
      while (set.has(next)) {
        set.delete(next);
        next++;
      }
      // left neighbor traverse, same idea as the right neighbor search
      while (set.has(pre)) {
        set.delete(pre);
        pre--;
      }
      // after finished with left and right neighbor search, compare the max
      max = Math.max(max, next - pre - 1);
    }
  }
  return max;
};
