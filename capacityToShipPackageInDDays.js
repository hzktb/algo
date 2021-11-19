// leetcode 1011
// given array of package weight in increasing order and a day integer
// find the lowest ship's weight capacity so that it can ship all the packages in the day integer
// you can ship multiple packages in one day as long as it doesnt exceed the ship's capacity

// using binary search with left most index of a target integer template
var shipWithinDays = function (weights, days) {
  let left = 0; // initialize left and right, right at 1 because the left < right boundary we will use for the while loop for the binary search
  let right = 1;
  // find the left and right boundaries based on the weights
  // left is the max in the weights array, at least 1 shipment in 1 day
  // right is the sum of all weights in the array, at most all shipments in 1 day
  for (let i = 0; i < weights.length; i++) {
    left = Math.max(left, weights[i]);
    right += weights[i];
  }

  // binary search logic (find the left most index of the integer)
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (helper(weights, mid) === days) {
      // if the weight limit is just right, we can try to ship less
      right = mid;
    } else if (helper(weights, mid) < days) {
      // the weight is too much, the days took is less than the days limited, we can try to ship less
      right = mid;
    } else if (helper(weights, mid) > days) {
      // the weight is too little, the days took is more than the days limited, we need to ship more
      left = mid + 1;
    }
  }
  return left;
};

// a helper function to calculate how many days needed to ship all packages with current weight limit
const helper = (weights, weight) => {
  let daysTook = 0;
  let i = 0;
  // 2 loops, the out loop makes sure it will run to the end of the weights array
  while (i < weights.length) {
    // we need to set a capacity variable that represents the daily weight limit
    let capacity = weight;
    // inner loop will run until either package weights are over capacity or when we reached the end of weights array
    while (i < weights.length) {
      if (capacity < weights[i]) {
        break; // capacity is overload, break from loop
      } else {
        capacity -= weights[i]; // add load to the capacity and move to next weight to check if we can add more
        i++;
      }
    }
    daysTook++; // add the days we need by 1 for each outer loop
  }
  return daysTook;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
