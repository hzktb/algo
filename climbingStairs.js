// utilizing dynamic programming
// first we need to figure out the brute force recursion method
// if we draw the pattern of this question out on white board, we can see that it is a binary tree with one branch of n - 1 and one branch of n - 2
// the end of the tree "n" should either be 0 or -1 for either a exact number of steps taken or 1 extra step too far. so this will be our base case.
// if (n === 0) return 1; if (n === -1) return 0;
// then we call the function recursively with climbStairs(n - 1) + climbStairs(n - 2) since we will need the steps added all together

// next we will be doing our memorization
// 1. we define an empty object memo in our function parameter
// 2. we create a key for each iteration. here we let the key be the n parameter.
// 3. we will check if the key exists in memo object, if exists, we return the already stored memo[key] value;
// 4. if the program runs to the assigning memo[key], it means the key was new and we will store it in our memo, which will do it recursively until the basecase.
// 5. remember the 2 parameters we passed in the recursive function, the memo is mandatory because it needs to pass this object to the next level functions to check the existance of the keys.
// 6. return the memo[key];

function climbStairs(n, memo = {}) {
  let key = n;
  if (key in memo) return memo[key];
  if (n === 0) return 1;
  if (n === -1) return 0;
  memo[key] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[key];
}

console.log(climbStairs(100));
