const slide = (arr) => {
  let need = {};
  let window = {};
  let valid = 0;
  let left = 0;
  let right = 0;
  let needSize = 0;

  // first build out the need map
  for (let i = 0; i < arr.length; i++) {
    if (need[arr[i]]) {
      need[arr[i]]++;
    } else {
      need[arr[i]] = 1;
      needSize++;
    }
  }

  // sliding window logic
  while (right < arr.length) {
    let cur = arr[right];
    right++;
    // check if the current right pointer element is in the need window
    if (need[cur]) {
      // then either increment the count of the cur in the window map or add it to the window map
      window[cur] ? window[cur]++ : (window[cur] = 0);
      // then we need to update the valid variable. The valid variable keeps track of if the elements in the window map matches the need map
      if (window[cur] === need[cur]) {
        // the valid variable will increment by 1 if the cur key's value in window map matches the cur key's value in the need map
        valid++;
      }
    }

    // after each right pointer increment, we have to check if we have all the needed keys in the window map
    // and we can start shrinking the window
    while (valid === needSize) {
      // get the current element the left pointer is at
      let curDel = arr[left];
      // then increment the left pointer
      left++;

      // ...updating answers accordingly

      // then we check the validity of the current element
      if (need[cur]) {
        // if the current window was matching the need map, then we have to decrement valid, because the current element was moved out of the window at this operation
        if (window[cur] === need[cur]) {
          valid--;
        }
        // decrement the current element in the window
        window[cur]--;
      }
    }
  }
  // then return answers accordingly
  return;
};
