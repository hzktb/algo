function twoSum(arr, target) {
  let result = [];
  result.length = 2;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (obj.hasOwnProperty(diff)) {
      result[0] = obj[target - arr[i]];
      result[1] = i;
    } else {
      obj[arr[i]] = i;
    }
  }
  return result;
}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 7, 11, 15, 6, 3], 9));
console.log(twoSum([3, 3], 6));
