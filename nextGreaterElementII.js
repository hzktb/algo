// given an input array arr, for each element, find the next larger element in the array. The array is circular so (arr.length - 1)++ will be 0
// normal solution: O(n^2) time with O(n) space
// for each element, iterate it thru the arr again starting from the following element, iterate until the element before the current element
// that is, complete the circle
// if it finds a solution, break from the inner loop, record the solution in a result array, and proceed with the next element

// optimal solution: O(n) time with O(n) space
// using stack to keep track of the larger element, so the stack will be in a decreasing order
// first, the idea is to iterate thru the input arr twice starting from the back (let i = 2 * arr.length - 1)
// for each element, we will use a while loop to compare it with top element of the stack, if the current element is larger, that means we dont need the top element of the stakck
// because the next greater element of all elements in front of the current element can only be the current element now (see nextGreaterElement for more detail)
// when the while loop breaks, that means either the stack is empty or we found our answer for the current element
// we then let the result array's element index that is same to the index the current element to equal either -1 or the current element's value (depending on if stack is empty)
// if stack is empty, we know that there is no elements in the array we iterated so far that is greater than the current element
// next we push current element's index into the stack (using index so we can search the element in the arr)

const nextGreaterElementII = (arr) => {
  let result = new Array(arr.length);
  let stack = [];

  for (let i = 2 * arr.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && arr[peek(stack)] <= arr[i % arr.length]) {
      stack.pop();
    }

    result[i % arr.length] = stack.length === 0 ? -1 : arr[peek(stack)];
    stack.push(i % arr.length);
  }
  return result;
};

const peek = (stack) => {
  return stack[stack.length - 1];
};

console.log(nextGreaterElementII([1, 2, 4, 3]));
