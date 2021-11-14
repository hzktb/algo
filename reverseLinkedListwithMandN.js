// leetcode 92
// given a linked list, and value m and n, reverse the nodes between m and n

// simialr to reverse linked list from head to nth node
// if m is at 1 that means we are reversing nodes from head to n
// if m is some other number < n, that means we have to traverse down the list until we find that m, then we can see the mth node
// as the head and use the same reverse list at nth node function

let originalNext;

// this is reverse nodes at nth node and before
const reverseAtNthNode = (head, n) => {
  if (n === 1) {
    originalNext = head.next;
    return head;
  }

  let last = reverseFromNthNode(head.next, n - 1);
  head.next.next = head;
  head.next = originalNext;
  return last;
};

const reverseFromMtoN = (head, m, n) => {
  // if m is 1 that means we reverse the list from head and down to nth node
  if (m === 1) {
    return reverseFromNthNode(head, n);
  }

  // if m is not one we have to traverse down the list
  // notice that we are decrementing m and n because as we are traversing, we will reach the m at some point, and we are reversing
  // starting at that m node, in other words we are treating it as a head node
  head.next = reverseFromMtoN(head.next, m - 1, n - 1);
  // if we are not reversing from the head, that means the head will stay the same
  return head;
};
