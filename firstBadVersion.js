// the isBadVersion function is hidden from the actual code

// this solution involves using binary search to reduce the maximum search time for a set of numbers.
// declaring two pointers left and right
// using mid as the middle to reduce the breadth of search.

var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
