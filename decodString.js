// given an input of string in form of various kinds of k[string]
// ex: k[string k[string]] or k[k[string]k[string]]
// construct the string into a expanded format
// ex: 3["a"] = "aaa", 3[a4["b"]] = abbbbabbbbabbbb

// stack approach
// we will iterate thru the input string, as long as the current element is not a "]", we will push it to the stack and move on to next element
// if we encounter a "]", we will construct a temp string that will hold the string inside a current [] by popping the stack until we find a "[" in the stack
// as we are popping the stack and it is not "[", we add it into the temp string (temp = stack.pop() + temp); the popped element has to be in the front so its in the right order
// after done with contructing the temp string, we have to pop the "[" out from the stack
// then we will start popping the stack again as long as the top of the stack is a number and the stack isn't empty
// we will store the number in a k variable and convert it to Number type
// then we push the temp string back into the stack k times and completes one loop
// when returning the final result, we just need to return the stack but we have to join the stack with ""

const decodeString = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    // if the current element is not "]", we push current element into the stack;
    if (str[i] !== "]") {
      stack.push(str[i]);
    } else {
      // if the current element is "]", we have to start contructing the substring until top of the stack is "["
      let temp = "";
      while (peek(stack) !== "[") {
        temp = stack.pop() + temp; // constructing the substring
      }
      stack.pop(); // pop out the "["

      let k = "";
      while (stack.length !== 0 && !isNaN(peek(stack))) {
        k = stack.pop() + k; // constructing the k
      }

      // push the substring back to the stack k times
      for (let j = 0; j < k; j++) {
        stack.push(temp);
      }
    }
  }
  return stack.join("");
};

const peek = (stack) => {
  return stack[stack.length - 1];
};

console.log(decodeString("3[a]2[bc]"));
