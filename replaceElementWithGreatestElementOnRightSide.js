// leetcode 1299
// given an array, replace each element with the greatest element to the right of it. for the last element, make it -1

// iterate from the back, maintaining a queue to store the current largest number
// if current element is larger than the first element in queue, push current element into queue, then replace it with
// the popped first element in the queue
// if current element is smaller, just replace it with the first element in the queue

const replace = (arr) => {
  let queue = [];
  queue.push(arr[arr.length - 1]);
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > queue[0]) {
      queue.push(arr[i]);
      arr[i] = queue.shift();
    } else {
      arr[i] = queue[0];
    }
  }
  return arr;
};
