// given a number n, find how many ways you can construct the binary tree using numbers from 1 to n with all unique numbers

// for each number i in the n, i is a root with the rest of the numbers be it's possible branch
// ex 1,2,3, root is at 1, it will have 2 and 3 in its child branch and there are multiple variations in the child branch
// there are left * right numbers of variations in each root, example 1,2,3,4,5, 3 is the root, and left is 1,2 right is 4,5
// number of elements in left * number of element in right = the total number of variations for that root (2 * 2) = 4
// this means 4 variations for the root of 3

// if root is at one, the left will be empty, however, we shoud still count it as one variation becuase null is also a valid value
// in BST

const unique = (n) => {
  // using dynamic programming to optimize the run time since there might be repeating operations
  // the memo will store the range of low and high as key and the corresponding number of variations as value
  let memo = new Map();
  const build = (low, high) => {
    if (low > high) return 1; // when the left or right is empty, null is still a valid variation
    if (memo.has(low + "" + high)) return memo.get(low + "" + high);
    let res = 0;
    for (let i = low; i <= high; i++) {
      // inclusive range for the for loop
      let left = build(low, i - 1);
      let right = build(i + 1, high);
      res += left * right;
      memo.set(low + "" + high, res);
    }
    return res;
  };

  return build(1, n); // notice the range we used is inclusive
};
