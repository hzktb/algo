var isAnagram = function (s, t) {
  let objS = {};
  let arrS = s.split("");
  let arrT = t.split("");
  arrS.forEach((char) => {
    if (objS[char]) {
      objS[char]++;
    } else {
      objS[char] = 1;
    }
  });
  console.log(objS);
  if (arrS.length !== arrT.length) return false;
  for (let i = 0; i < arrT.length; i++) {
    if (objS.hasOwnProperty(arrT[i]) && objS[arrT[i]] !== 0) {
      objS[arrT[i]]--;
      continue;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("something", "thingsome"));
console.log(isAnagram("aaasssss", "aaassss"));
console.log(isAnagram("aacc", "ccac"));
