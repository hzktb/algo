// leetcode 76
// given s and t string, find the smallest substring in s that contains all letters in t

// using sliding window technique
// maintain two maps here (using map for better lookup time), need and window
// the need map will be build before other logics start
// the need map is a map that contains the letters in the t as key and frequency of that letter appeared as the value

// the window map will be built as we are traversing down the s string with some certain conditions
// *** the window map will contain same keys as the need map but the frequency is based on the current side of the window we are
// maintaining with two pointers left and right
// another way thinking it is a map for all letters between the left and right pointer and it will only have keys that the need map has, and the frequency for each key is
// the frequency of the letters in the t string appeared in the left and right pointer window

// then the main logic for the sliding window:
// maintain left, right, valid, start, len variables here
// left and right will be the boundaries for the window and it is right open
// the valid is a value that will increment by 1 for each time a key and value pair equals for window map equals to the need map
// ex: need = {"a": 1} window = {"a": 1}
// the start and len variable will be updated when the current valid substring is smaller compare to the last valid substring

// we will first increment the right pointer and as we are incrementing, we will check if the current letter is in the need map
// if it is in the need map, we will increment that corresponding letter in the window map, and then we have to check if
// the window[key] === need[key] or the frequency of the current letter in window is same as in the need map
// if it is the same, that means we have found a match and we can increment the valid count by 1
// this loop will keep going until it fills up the valid count to be the same as the number of keys in the need map
// (basically means all letters are present in the window)
// then we proceed to a inner while loop where as long as valid is equal to the size of the need map,
// we first will check if the current substring size (left and right pointer) is smaller than the previous substring size (recorded using the len variable)
// if yes, then we have to update the start to be the left pointer value, and the len variable equal to the right pointer - left pointer (the length of the substring)
// then we will take out the letter the left is pointing at, and increment left
// then we check the letter we pulled out and see if it is a letter in need map, if it is, we have to check if the current key's value in need and window map are equal
// if they are equal, we have to decrement the valid because we lost 1 exact counf of frequencies of a letter
// (this ensures that incase a substring has more than enough frequencies than it needed in the need map)
// then we need to decrement that letter in the window map since it is not in the window (left and right substring) anymore
// and then the loop will keep going until all the letters in the s string is traversed and the window has shrunk to the last
// then we return the substring by using the start and str + len to cut it out from the s string
// str + len because the len is just the length of the smallest substring, and str + len will give us the end boundary of the substring

var minWindow = function (s, t) {
  // initialize two maps, one to map the target string, one to map the window
  let need = {};
  // window only stores values that exists in need map
  // but might have more values for each key
  let window = {};

  // build the need map from the t with each characters and the frequency
  for (let char of t) {
    if (need[char]) {
      need[char]++;
    } else {
      need[char] = 1;
    }
  }

  // main logic - sliding window
  let left = 0;
  let right = 0;
  let valid = 0;
  // initialize a len variable as the length of the answer string, if this is still infinity by the end, that means we never found a match substring
  let len = Infinity;
  // initialize a start pointer, this will be the actual start pointer of the answer string we will cut out after the loops are all done
  let start = 0;
  while (right < s.length) {
    // take out the current character at right pointer
    let curChar = s[right];
    // increment the right pointer
    right++;
    // check if the current character is in need map
    if (need[curChar]) {
      // increment the current character value in window or creating it depends on if we have it in the window map
      if (window[curChar]) {
        window[curChar]++;
      } else {
        window[curChar] = 1;
      }
      // when the frequency is matched in the two maps, we increment the valid variable
      if (window[curChar] === need[curChar]) {
        valid++;
      }
    }
    // check if we need to shink the window from left
    while (valid === size(need)) {
      // if current window's length is less than the last valid window's length, then we should update the len to current window
      if (right - left < len) {
        start = left; // start will be at left since left is the beginning of the new smallest substring
        len = right - left; // update the len of the smallest substring;
      }
      // start shrinking the window by incrementing left pointer
      let delChar = s[left];
      left++;
      // if the current character we are shrinking is a character we need in the need map and the value in the needs and the window map matches up, we need to decrement the valid if the value in window is same as value in need
      if (need[delChar]) {
        if (window[delChar] === need[delChar]) {
          valid--;
        }
        // then we have to decrement the value in the window map as well as it is now not in the left right pointer range
        window[delChar]--;
      }
    }
  }
  // after all loops are done, we will check the len of the smallest substring we found
  // if the len is infinity, that means there was no matching substring, otherwise, we take out the substring using the start and start + len we maintained thru out the logic
  return len === Infinity ? "" : s.substring(start, start + len);
};

// a helper function to get the size of an object
const size = (obj) => {
  let length = 0;
  for (let k in obj) {
    length++;
  }
  return length;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
