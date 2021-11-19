// leetcode 875
// given an array of bananas represented by integers and a variable h representing how many hours the guards away
// find the minimum number k that koko has to eat per hour, so that koko can finish all bananas in the piles before the h runs up

// using binary search to find k within range of 1 to 10^9 + 1. (10^9 is the maximum number of bananas in one pile, and + 1 because
// we are using left < right so the end condition is left = right, and if boundary is at 10^9 then it will basically ignore the
// last operation which might still be valid solution, so we have to use + 1 of right boundary initially)

// create a helper function to receive the current k (mid of the binary search) and the array piles and calculate the time
// needed to eat all the piles, and the hours will be sent back to compare with the target h, if h is greater, that means we are eating
// too little, if h is lesser or equal to hours spent, that means we can eat a little less (finding the left-most
// index of a certain integer in the array leetcode 34)

// minBananaToEat is basically binary search template to find left most index of integer with [left, right) left open and right closed

const minBananaToEat = (piles, h) => {
  let left = 1;
  let right = 1000000000 + 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (helper(piles, mid) <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

const helper = (piles, k) => {
  let hours = 0;
  for (let i = 0; i < piles.length; i++) {
    if (piles[i] % k === 0) {
      hours += piles[i] / k;
    } else if (piles[i] % k !== 0) {
      hours += Math.ceil(piles[i] / k);
    }
  }
  return hours;
};

console.log(find([1, 2, 3, 4], 4));
