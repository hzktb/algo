// leetcode 438
// given two stirngs s and t, find all anagrams of t in s and return an array of the starting index of each anagram

// using sliding window technique

// basically same as finding possible permutations in a string, but instead of returning true, just adding the left pointer to a res array

const findAnagrams = (s, t) => {
  let need = {};
  let window = {};
  let left = 0;
  let right = 0;
  let res = [];
  let valid = 0;

  // map the need map
  for (let i of t) {
    need[i] ? need[i]++ : (need[i] = 1);
  }

  while (right < s.length) {
    let curChar = s[right];
    right++;

    if (need[curChar]) {
      window[curChar] ? window[curChar]++ : (window[curChar] = 1);
      if (need[curChar] === window[curChar]) {
        valid++;
      }
    }

    while (right - left >= t.length) {
      // found exact anagram
      if (valid === size(need)) {
        res.push(left);
      }

      let delChar = s[left];
      left++;

      // normal left pointer traversal window checking
      if (need[delChar]) {
        if (window[delChar] === need[delChar]) {
          valid--;
        }
        window[delChar]--;
      }
    }
  }
};

const size = (obj) => {
  let length = 0;
  for (let i in obj) {
    length++;
  }
  return length;
};
