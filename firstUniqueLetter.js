function a(s) {
  let obj = {};
  let arr = s.split("");
  arr.forEach((char) => {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  });
  console.log(obj);

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(a("leetcode"));
console.log(a("aabb"));
console.log(a("aabbcccdddffrt"));
console.log(a("aabbsfrgergeargvvvvwe"));
console.log(a("aabbwefweawefqqav"));
console.log(a("aabbxxxasassdsfwesi"));
