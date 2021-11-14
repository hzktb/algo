// leetcode 141
// given a linked list, check if it has a loop somewhere
// using two pointers, 1 will traverse twice as fast as the other, and if they ever equal to each other, then there is a loop
// if fast pointer ever equal to null or fastpointer.next equals to null, that means there is no loop

const determineCircle = (head) => {
  let p1 = head;
  let p2 = head;

  // boundaries for the p1 and p1.next is important as p1 is traversing two nodes at a time
  while (p1 !== null && p1.next !== null) {
    p1 = p1.next.next;
    p2 = p2.next;
    // we have to traverse first before comparing since initially p1 = p2 = head
    if (p1 === p2) return true;
  }

  // if the while loop terminates, that means we found a null and there is no loop in the list
  return false;
};
