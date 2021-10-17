// an input array with temperatures 30 <= temperatures[i] <= 100, 1 < temperatures.length < 10^5
// for each element, find the next higher temperature and in the response, show the distance (how many days apart) between the two days
// ex temperatures = [73,74,75,71,69,72,76,73]
// res = [1,1,4,2,1,1,0,0]

// normal solution: O(n^2) run time with constant space. For each temperature, run a loop to find the next bigger number

// optimal solution: O(n) run time with O(n) space.
// using stack to keep track of the temperatures we encountered. The stack will save the index of the temperature for distance (days spart) calculation
// for each iteration of the temperature, we will check that temperature with the top of stack's temperature (an index, so we need to do temperatures[stack[stack.length - 1]] to get the temperature of that top element)
// if the current iterating temp is greater, that means we have a potential higher temperature than multiple of the days saved in the stack, we have to use while loop to check each day (make the distance calculation with the two indexes) until a day is larger than the current iterating day
// at the end of the while loop, we then will push the currently interating day to the stack
// if the currently iterating temp is smaller than the top element of the stack, we push the current day to the stack as the index for that day

var dailyTemperatures = function (temperatures) {
  let stack = []; // intialize the stack as empty array
  let res = new Array(temperatures.length).fill(0); // intialize an array with same length as the temperatures with 0's, because we will leave all days that has no next high as 0

  for (let i = 0; i < temperatures.length; i++) {
    // iterate thru each day
    let top = stack.length - 1; // javascript doesnt have a stack.peek() method, the variable was created for cleaner code (even tho not much cleaner...)
    if (stack.length === 0 || temperatures[i] <= temperatures[stack[top]]) {
      // stack.length === 0 is there so on the first day, we know that it will be pushed to the stack. if stack is not empty, we then check if the current day's temp is smaller than the top of stack's day, we push it into the stack
      stack.push(i);
    } else {
      // if the code gets here, we know the higher temp day for the top of the stack is here, we pop the top of the stack, and calculate the index difference and update it in the res array with the popped index with a while loop because there might be multiple days in the stack that the first day of higher temperature is the current day
      while (
        stack.length !== 0 && // make sure we have temperatures to compare in the stack just to be safe
        temperatures[i] > temperatures[stack[stack.length - 1]] // as long as the current top of the stack's temperature is lower than the current day, we will keep updating our response array
      ) {
        let popped = stack.pop(); // pop the top of the stack
        res[popped] = i - popped; // calculate how many days apart using the indexes of the current day and the day saved in the stack
      }
      stack.push(i); // when done with the while loop, we push the current day into the stack so it will be compared later
    }
  }
  return res; // after finishing the iterations, return the response
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
