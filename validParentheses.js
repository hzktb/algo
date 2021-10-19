// input is a string of open and close parentheses. write a function to determine is the open and closing is following a correct pattern as in one open matches one close
// ex: ()()()[] is valid
// ex: ))(()) is invalid
// ex: ( is invalid

// use stack to store open parentheses and if encounters a closing parenthese, check if it matches the parenthese of the top of the stack
// when done with iteration, if the stack is not empty, that means there are no matching parenthese, then we return false
// if we encounter a closing that doesnt match the open parentheses on the top, then we return false;

const peek = (stack) => {
  return stack[stack.length - 1];
};

const validParenthese = (s) => {
  let stack = [];

  // using the map to easily check if the closing parenthese matches with the top, cleaner code
  let map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let c of s) {
    if (map[c]) {
      // if the current c is in the map (c is the key and if it's a closing parenthese, it will be in the map, if it's open, then it wont be in the map)
      if (stack.length !== 0 && map[c] === peek(stack)) {
        // if stack isnt empty, and the value of the key in the map equals the top of the stack, then we know we have a match
        stack.pop();
      } else {
        // if not a match, we know it's false
        return false;
      }
    } else {
      stack.push(c); // current c is not in the map, we know its a open parentheses, we can push it to the stack
    }
  }
  return stack.length === 0 ? true : false; // after the iteration, check if the stack is empty. if it is empty, it means we found all matches
};
