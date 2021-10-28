// find the longest substring in the input without any repeating characters in the substring
// ex: input "abcabcbb" ans = 3 because the longest substring is abc or bca or cab

// set approach: time O(n) space O(n)
// maintain a two pointer as the substring, also initialize a set to keep track of the characters appeared while we iterating with j
// for each element in the iteration, we have to check if that element exists in the set, if it does, then we need to delete the element at pointer i in the set and have to increment our i by 1 until we deleted the existing j element in the set (we can not go straight delete the j element in the set because we need to maintain the substring)
// after the deletion of the elements in the set, we then will add current j element to the set and also compare the result with the length of the set

const longestSubstrWithoutRepeatingChar = (str) => {
  let result = 0;
  let set = new Set();
  let i = 0;

  for (let j = 0; j < str.length; j++) {
    while (set.has(str[j])) {
      set.delete(str[i]);
      i++;
    }
    set.add(str[j]);
    result = Math.max(result, set.size);
  }
  return result;
};
