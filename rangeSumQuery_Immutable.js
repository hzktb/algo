// leetcode 303
// given a nums array with all integers, write a class that can return the
// sum of all elements in the array

// using a method to add the previous sum to the current element and set it to
// the current i position in the new array prenum
// suppose input nums is [1,1,1,1,1], the new array will be built is [0,1,2,3,4,5] (leave out a 0 because we are adding left element to current element)
// in the new array, each element is the sum of itself + the value of 1 element to the left of it
// so the last element is the sum of all element combined, and if we want to find the sum
// between range 0 to 5, we are basically saying newarray[4 + 1] - newarray[0]
// newarray[4 + 1] because we added a dummy element 0 to the front of the array

function NumArray(nums) {
  this.prenum = new Array(nums.length + 1).fill(0);
  this.buildPrenum = function () {
    for (let i = 1; i < this.prenum.length; i++) {
      this.prenum[i] = this.prenum[i - 1] + nums[i - 1];
    }
  };
  this.buildPrenum();

  this.sumRange = function (left, right) {
    return this.prenum[right + 1] - this.prenum[left];
  };
}

let num = new NumArray([3, 5, 2, -2, 4, 1]);
let res = num.sumRange(1, 3);
console.log(res);
