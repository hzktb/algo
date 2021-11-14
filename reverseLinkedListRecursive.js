// leetcode 206
// given a linked list, reverse the list recursively

// traverse all the way to the end of the list, then return the end of the list one level up, have that head.next.next (at this point
// it's the end node's next pointer) point to head itself, then have the head.next point to null and return the last node as the head
// up a level again

const reverse = (head) => {
  if (!head || head.next === null) return head; // base case and incase its an empty list or when there is only one node in the list

  // this will traverse all the way to the end of the list and return that last node
  let last = reverse(head.next);
  // when we got the last node, start manipulating the current node's next pointers
  head.next.next = head; // at this moment, head.next was still pointing to the next node in original order
  // and the next pointer of the next node is pointing to null as of now
  // next step is to make current head.next point to null
  head.next = null; // this head will now serve as the end of the current reversed list and its next is pointing to null
  // when returned one level up, that upper level node's next pointer is actually pointing towards this current head and the
  // head is pointing to null, so it will basically go thru like 14 and line 17 again to change the pointers as it is popping back

  return last;
};
