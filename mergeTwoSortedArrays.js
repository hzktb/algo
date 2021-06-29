function merge(arr1, m, arr2, n) {
  let i = m - 1;
  let j = n - 1;

  for (let end = arr1.length - 1; end >= 0; end--) {
    if (j < 0) break;
    if (arr1[i] > arr2[j]) {
      arr1[end] = arr1[i];
      i--;
    } else {
      arr1[end] = arr2[j];
      j--;
    }
  }
  return arr1;
}

console.log(merge([1, 2, 3, 4, 0, 0, 0], 4, [1, 2, 3], 3));
