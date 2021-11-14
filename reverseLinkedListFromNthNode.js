// leetcode 92 prereq
// given a linked list and value n, reverse the list fron Nth node and return the nth node as the head
// the returned list should be same size as original

// similar to fully reverse a linked list
// we will traverse all the way down to the node we want to start reversing, in this case the nth node
// the base case for recursion will be little different as we are counting how far we are from the nth node

// we need a global variable to store the head of the remaining original list, so we can connect it to the last node of the reversed list
let originalNext;

const reverseFromNthNode = (head, n) => {
  if (n === 1) {
    originalNext = head.next;
    return head;
  }

  // similar to normal reverse list, however, we will need to decrement n by 1 every traversal because we are one node closer
  let last = reverseFromNthNode(head.next, n - 1);

  head.next.next = head; // same as normal reverse
  head.next = originalNext; // the original next is the node that was suppose to come after the nth node
  // similar to the normal reverse list, the head.next has to point to something that connect to the end of the list,
  // in this case it will point to the head of the remaining of the original list

  return last;
};
