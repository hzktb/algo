// leetcode 19
// given a linked list and n value, delete the nth value from the end of the linked list
// ex: 1,2,3,4,5 n = 2 => result = 1,2,3,5

// using two pointer method, and traverse pointer 1 n times down the linked list, then traverse pointer 2 with pointer1
// make pointer 2 start at a dummy node, because there will be cases to delete the head of the list

class ListNode {
  constructor(val, next) {
    this.val = val !== undefined ? val : null;
    this.next = next !== undefined ? next : null;
  }
}
const deleteNthNode = (head, n) => {
  let dummy = new ListNode(-1); // set the dummy node
  dummy.next = head;
  let p1 = head; // set pointer 1
  let p2 = dummy; // set pointer 2 at dummy

  // traverse the pointer 1 to the nth element from the head of the list
  for (let i = 0; i < n; i++) {
    p1 = p1.next;
  }

  // traverse p1 and p2 down the list at same rate, until p1 is at end of list at null, at that time, p2 will be at the
  // node that is before the node we want to delete
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  p2.next = p2.next.next; // let the next pointer before the node we want to delete point to the next node of the node we want to delete

  return dummy.next;
};
