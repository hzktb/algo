// leetcode 567
// given strings s1 and s2, find if s2 contains all the letters in s1 without considering the order (permutation of s1)

// using sliding window technique
// build out the need map first
// then in the outer while loop, run it as long as right pointer is not at the end of s2
// first: get the element (current character) that the right pointer is at, then increment right, and check current character in need map
// and add it in the window map since window map will have the same keys as need map
// then we check the frequency of the key in the window and in the need, if they are same, valid will increment by 1

// the inner while loop will run if the current length for our window (right - left) is larger or equal to target string s1
// because the question says only permutations so the substring has to be equal or larger to qualify for left pointer to traverse
// in the inner loop, we first check if valid is same size as need map, then we can return early (valid and need map will equal only
// when the substring is an exact permutation because it will only get into the inner loop when the current window is same size as
// the s1 string so when it get into the inner while loop it will have 2 cases where either valid is not satisfied or valid is satisfied)

// if valid is not satisfied, we can go to normal left pointer traversal (get the character at left pointer then increment left pointer
// and then check the validity of the need and window for the current character and decrement valid and window accordingly)

var checkInclusion = function (s1, s2) {
  // sliding window technique

  // need and window will contain same keys, but different value frequencies
  let need = {};
  let window = {};

  // make the need map first
  for (let i of s1) {
    need[i] ? need[i]++ : (need[i] = 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;
  while (right < s2.length) {
    // normal sliding window right pointer traverse template
    let curChar = s2[right];
    right++;

    // check if it is a character we need in need map
    if (need[curChar]) {
      // if yes, we add it to the window
      window[curChar] ? window[curChar]++ : (window[curChar] = 1);
      // then we check if the curChar in window is equal to in need in frequency
      if (window[curChar] === need[curChar]) {
        // if equal, that mean we have 1 character satisfied
        valid++;
      }
    }

    // after incrementing the right pointer and check the character the right pointer is pointing
    // we then need to check if we have all elements we need in the window (since we are looking for exact length in subarray we can use right - left >= s1.length)
    // using >= s1.length is because when the length is equal, we will check if the valid is same as need (meaning we got the exact match - characters could be in different order)
    while (right - left >= s1.length) {
      if (valid === size(need)) {
        return true;
      }

      // normal sliding window left pointer traverse template
      let delChar = s2[left];
      left++;
      // normal sliding window left pointer moveout check
      if (need[delChar]) {
        if (window[delChar] === need[delChar]) {
          valid--;
        }
        window[delChar]--;
      }
    }
  }
  return false;
};

const size = (obj) => {
  let length = 0;
  for (let i in obj) {
    length++;
  }
  return length;
};

console.log(checkInclusion("ab", "eidbaooo"));
