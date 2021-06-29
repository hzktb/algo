var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }
  let map1 = {};
  nums1.forEach((num) => {
    if (map1[num] == null) map1[num] = 0;
    map1[num]++;
  });

  let result = [];
  nums2.forEach((num) => {
    let count = map1[num] !== null ? map1[num] : null;
    if (count > 0) {
      result.push(num);
      console.log(count);
      map1[num] = count - 1;
    }
  });
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
