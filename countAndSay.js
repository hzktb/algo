var countAndSay = function (n) {
  if (n === 1) return "1";
  let result = "1";
  while (n > 1) {
    let i = 0;
    let count = 0;
    let str = "";
    for (let j = 0; j < result.length; j++) {
      if (result[i] == result[j]) {
        count++;
      } else if (result[i] !== result[j]) {
        str += String(count);
        str += result[i];
        count = 1;
        i = j;
      }
    }
    str += String(count);
    str += result[i];
    result = str;
    n--;
  }
  return result;
};
// countAndSay(2);
// console.log(countAndSay(3));
console.log(countAndSay(5));

// // console.log(countAndSay(1));
