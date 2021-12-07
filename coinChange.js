// leetcode 322
// given an array of numbers representing the face amount of the coins, and an amount
// find the smallest amount of coins possible that can sum up to the amount. coin counts are unlimited and coins can be reused

// in order to find the best solution, we have to iterate each coin in the array, and at each coin choice, we have to find the best
// result of amount - coin value (which is a sub problem), which means we have to selected another coin from the array (can be the same coin value)
// until we reach the bottom when amount is 0 (that means we dont need to keep looking anymore) or when amount is < 0 (that means we picked
// a coin that is too big of a face value)
// then as we pop back up, we add 1 to the result (indicating that we used a coin), we also need to compare the current result with the
// result we found to get the minimum number
// each level will have a result variable to keep track the minimum number of coins we need for current level

const coinChange = (coins, amount) => {
  let memo = {}; // using a memo to keep track of amount we have calculated
  return dp(coins, amount, memo);
};

const dp = (coins, amount, memo) => {
  if (amount === 0) return 0; // base case when we found a valid answer, 0 indicates that we need 0 coins to sum to amount
  if (amount < 0) return -1; // base case when coin picked is too big, -1 indicates that this is not a valid route of coin picking

  if (memo[amount]) {
    // check if the current amount was already been calculated before
    return memo[amount];
  }
  let res = Infinity; // set result at biggest right now, because we try to find min

  // iterate the coin choices here and for each coin choice we have to traverse down to the sub problem of amount - coin value
  for (let i of coins) {
    let subproblem = dp(coins, amount - i); // traverse down a route until amount reaches -1 or 0
    if (subproblem === -1) continue; // if it's -1, it's not a valid route, we skip it
    res = Math.min(res, subproblem + 1); // if it returns a valid number, we compare it with the current level res to find the minimum coin amount
    // notice the + 1 here, it means we add 1 coin to the current valid answer. (we are building the res from bottom up)
  }
  memo[amount] = res === Infinity ? -1 : res; // stores the best result for current level iteration, if its -1 that means there is no valid solution for current level
  return res === Infinity ? -1 : res; // if there is no valid routes in current level (no comparison was made for res in the loop)
  //   return memo[amount]; both these returns are correct
  // we return -1 back up
};
