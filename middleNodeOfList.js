// leetcode 876
// given a linked list, find the middle node of the linked list

// using two pointer, make pointer 1 traverse twice as fast as pointer 2

const middleNode = (head) => {
  let p1 = head;
  let p2 = head;

  // make sure the p1 is not at null or p1.next is not null because we will jump thru p1.next so if p1.next is null, there will be no next pointer at p1.next
  while (p1 !== null && p1.next !== null) {
    p1 = p1.next.next;
    p2 = p2.next;
  }
  return p2;
};
