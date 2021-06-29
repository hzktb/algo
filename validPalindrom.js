function palindrome(s) {
  let regex = /[a-z0-9]/;
  let newArr = [];
  let arr = s.toLowerCase().split("");
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  let head = 0;
  for (let tail = newArr.length - 1; tail > head; tail--) {
    if (newArr[head] == newArr[tail]) {
      head++;
    } else {
      return false;
    }
  }
  return true;
}

console.log(palindrome("SASAASWDsomething..121412.___"));
console.log(palindrome("racecar"));
