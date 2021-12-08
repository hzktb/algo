// leetcode 300
// given an array, find the number longest increasing subsequence
// ex: input = [10,1,4,6,9,3,12] res = 5, because the longest increasing is [1,4,6,9,12]

// using dynamic programming here
// maintain a dp array with length of the input array's length and initially filled with 1's
// the idea here is to use the dp array to keep track of the number of the subsequence with the current nums[i] as the end of the subsequence
// for example: nums[0] is 10, and in dp[0] it will be 1 because there is no things to compare to
// then at nums[1], it will iterate thru nums from 0 to i (1 here) and check if nums[i] > nums[j], if yes that means we have a valid subsequence so far
// and we update the dp[i] (1 here) with Math.max(dp[j] + 1, dp[i]) we need to find the maximum subsequence here so we need math.max
// if dp[i] < dp[j] then we skip it because it's not an element we wanted

// after that, we can iterate thru the dp to find the max element which is the answer

const longestSub = (arr) => {
  let dp = new Array(arr.length).fill(1); // initialize a dp array with length of arr and filled with 1

  for (let i = 0; i < arr.length; i++) {
    // for each nums[i], we need to iterate from 0 to i again and compare the nums[i] and nums[j] and if nums[i] > numsp[j], we have a valid subsequence and we will need to get it's corresponding value in dp as it is size of subsequence ended with itself
    // also need to remember to + 1 for the dp[j] as it just means added 1 element (nums[i]) to the current valid subsequence that eneded with nums[j]
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]); // dp[j] + 1 here to indicate that we added 1 element in the end of a valid subsequence that ended with nums[j]
      }
    }
  }
  // this will ensure to build out an array with numbers that represent the number of elements of subsequences that eneded with nums[i]

  // find the max in dp array
  let max = 0;
  for (let i of dp) {
    max = Math.max(max, i);
  }
  return max;
};
