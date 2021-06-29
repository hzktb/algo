function testing(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    }
  }
  return i + 1;
}

console.log(testing([10, 20, 20, 40, 50, 1, 1, 1]));
