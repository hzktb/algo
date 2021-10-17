// input array with elements 0 <= arr[i] <= 9;
// iterate thru the array and when encounter a zero, append a zero next to that zero element
// only modify the input itself;

// normal approach: iterate thru the array, when encounter a zero, append a zero next to it, and then move every element back 1 index
// time complexity will be N^2 at the worst case

// optimal approach: utilize a queue, iterate thru the array, if the current element is not zero, push that element to the queue, and pop the first element of the
// queue and replace it with arr[i]
// if the current element is 0, then push two zeros to the queue, and pop the first element of queue and replace it with arr[i]
// when the array is out of bound, push the remaining of the queue to the array input

const duplicateZeros = (arr) => {
  let queue = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      queue.push(0);
      queue.push(0);
    } else {
      queue.push(arr[i]);
    }
    let temp = queue.shift();
    arr[i] = temp;
  }

  // both are correct result
  arr = [...arr, ...queue]; // spread opeator method, copies the remaining of the queue to the end of the arr input

  //   for (let j of queue) {
  //     // normal method, iterate thru each element in queue and push to arr input
  //     arr.push(j);
  //   }

  return arr;
};

let array = [1, 0, 0, 2];
console.log(duplicateZeros(array));
