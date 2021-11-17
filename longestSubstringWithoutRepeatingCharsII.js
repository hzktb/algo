// leetcode 3
// given a string, find the length of the longest substring with no repeating characters
// using sliding window
// no need map here since we dont have a substring that we need to match

const longestSubstring = (s) => {
  let window = {};
  let left = 0;
  let right = 0;
  let res = 0;

  while (right < s.length) {
    // typical sliding window right traversal template
    let curChar = s[right];
    right++;
    // no need map here, just add the character to the map
    window[curChar] ? window[curChar]++ : (window[curChar] = 1);

    // notice the condition for while, this will run only when we run into the current curChar been repeating in the window
    // we add the curChar to the map, then we check the map for repeating of this curChar
    while (window[curChar] > 1) {
      // increment left template
      let delChar = s[left];
      left++;
      window[delChar]--; // decrement the character that the left pointer moved out of
    }
    res = Math.max(res, right - left); // compare the current length of substring to the previous largest substring that satisfies
  }
  return res;
};
