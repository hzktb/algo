const findLeft = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      right = mid;
    } else if (arr[mid] > target) {
      right = mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }
};

const findRight = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid;
    }
  }
  return left - 1;
};

console.log(findRight([1, 2, 3, 3, 4, 4, 4, 5], 4));
