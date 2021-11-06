// leetcode 652
// given a root of a binary tree, find the duplicate branches and return the list of roots that has duplicates

// using postorder traversal to get the child branch of a root node, then construct the two branches with the root.val as a string
// and store it in a map/dictionary for search in case it occurs again

let res = [];
let map = {}; // using this instead of map for easier key/value manipulation

const build = (root) => {
  if (root === null) return "#"; // this is to construct the string for the map in case we are at the leaf node

  // postorder traversal template
  let left = build(root.left);
  let right = build(root.right);

  // postorder traversal root operation
  // this constructs the string to be stored in the map as key
  // object in javascript is not the same even if the object is the same visually so we have to store as a string
  let subtree = left + "," + right + "," + root.val;
  if (!map.hasOwnProperty(subtree)) {
    map[subtree] = 1; // if the subtree we encounter is first time seen, add it to the map and record the times seen
  } else if (map.hasOwnProperty(subtree) && map[subtree] < 2) {
    // if the subtree is seen once only ( < 2) then we can know that it is a duplicate and we add it to res
    // we have < 2 because we just need to know it is a duplicate, no need to add it to res again if we see it third time

    // push the root to res, we just need the root as the reference in the res
    res.push(root);
    map[subtree]++;
  }

  return subtree;
};

const construct = (root) => {
  build(root);
  return res;
};
