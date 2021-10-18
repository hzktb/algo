var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    if (
      asteroids[i] > 0 ||
      stack.length === 0 || // incase the first asteroid is negative
      stack[stack.length - 1] < 0
    ) {
      // incase there were negative asteroids in the stack that didnt get collisions
      stack.push(asteroids[i]);
    } else {
      console.log(i);
      // when encounters a negative asteroid (normal case)
      // while the current asteroid is a negative and it is larger than the top stack positive asteroid and the stack isnt empty (for the pop method to work)
      while (
        stack.length > 0 &&
        asteroids[i] < 0 &&
        Math.abs(asteroids[i]) > stack[stack.length - 1] &&
        stack[stack.length - 1] > 0
      ) {
        stack.pop();
      }

      // done with the negative asteroid being the winning one, check if the negative and the top stack asteroids are the same size while stack is not empty
      if (
        stack.length > 0 &&
        Math.abs(asteroids[i]) === stack[stack.length - 1]
      ) {
        stack.pop();
        continue; // both asteroid is destroyed and we continue to next asteroid
      }

      if (stack.length === 0 || stack[stack.length - 1]) {
        // in case when no asteroids in stack is greater than the current negative asteroid
        stack.push(asteroids[i]);
      }

      // last case when the negative asteroid is smaller, we just go to next asteroid because it will be destroyed so we can skip it and do no operations
    }
  }
  return stack;
};

console.log(asteroidCollision([1, -2, -2, -2, 2]));
