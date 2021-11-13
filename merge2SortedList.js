// leetcode 21
// given two sorted singly linked lists, combine them and still maintain a sorted list

// using two pointers, one at each linked list, compare the values the two pointers pointing, and add the lower value to a result linked list

class ListNode {
  constructor(val, next) {
    this.val = val !== undefined ? val : null;
    this.next = next !== undefined ? next : null;
  }
}

const mergeTwoSortedList = (l1, l2) => {
  // head for the result
  let result = new ListNode(-1);
  // pointer pointing in result because we have to traverse the result as we add new nodes to the result list
  let p = result;

  // two pointers
  let p1 = l1;
  let p2 = l2;

  while (p1 !== null && p2 !== null) {
    // compare the two values and add the lower value to the result list also traverse the pointers down the list
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }

  // in case when one of the list is not terminated yet, add all the rest of the list to the result list
  if (p1 !== null) {
    p.next = p1;
  }
  if (p2 !== null) {
    p.next = p2;
  }

  return result.next; // return the next of the result because the result is a node with value of -1
};
