// given a complete binary tree (a tree with all the parents nodes has at least one child node and the order of the nodes should
// go from left to right)

// traditionally we can just traverse down the tree left and right and count each node, but the time will be O(n) which is not bad
// however, we can use the fact that the complete binary tree will have at least one perfect binary tree somewhere
// a perfect binary tree is a balanced tree with exactly 2 child nodes for each parent node
// the number of nodes of the perfect binary tree is 2 ^ (height + 1) - 1; height is the height of the tree
// so counting the total nodes of a complete binary tree is counting nodes of perfect binary tree + counting other non perfect binary tree nodes

const count = (root) => {
  // base case when we are at the leaf node for the counting of non perfect binary tree nodes
  if (root === null) return 0;

  // initilizing the variables for the perfect binary tree
  let left = root; // setting the pointers
  let right = root;
  let hl = 0; // setting the initial height of the tree, starting at 0
  let hr = 0;

  while (left !== null) {
    left = left.left; // traversing to the very left of the tree
    hl++; // notice the operation here that we are adding 1 to the current level, so when we reach the bottom level, the height will be height + 1 instead of height (in other words we are counting stating at 1)
  }
  while (right !== null) {
    right = right.right; // traversing to the very right of the tree
    hr++;
  }

  if (hl === hr) {
    // if the height of very left and the very right are equal we know it is a perfect binary tree by the definition of the complete binary tree (child nodes starts from left to right)
    return 2 ** hl - 1; // notice we are using hl instead of (hl + 1) because we technically counted 1 extra level
  }

  // if not perfect binary tree, just add 1 to the current answer and traverse down the left and right one more level to check if the next level has perfect binary trees
  return 1 + count(root.left) + count(root.right);

  // this algorithm reduces the search time down to logN*logN because we know for sure at some point that it will return early because of the perfect binary tree
  // and basically only one side of the binary tree will actually traverse all the way to the bottom and pop backup
};
