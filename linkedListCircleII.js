// leetcode 142
// given a linked list, determine the beginning of the circle if it has one
// using two pointer method and traverse 1 pointer twice as fast as the other to see if it is a circle
// then when p1 and p2 meets, we know there is a circle, and the meeting node is somewhere in the circle
// if we set distance from head to the meeting node as k, we know that p1 traversed 2k (twice as fast)
// and the meeting node can be m nodes away from the circle head
// so the distance from head to the circle head is k - m
// the circle is a distance of k as well, so the distance from meeting node to the next loop circle head is also k - m
// thus we can set p2 to head and p1 at the meeting node, then traverse them as same speed
// since distance of head to the circle beginning and the distance of meeting node to the circle beginning is the same
// they will certainly meet at the circle begining once they traverse k - m nodes

const circleHead = (head) => {
  let p1 = head;
  let p2 = head;
  while (p1 !== null && p1.next !== null) {
    p1 = p1.next.next;
    p2 = p2.next;
    if (p1 === p2) break; // if p1 and p2 meets, we know we found the meeting node
  }
  if (p1 === null || p1.next === null) return null; // if the first while loop was terminated by finding a null, we know there is no circle

  p2 = head; // set p2 back to the beginning and traverse at the same speed as p1
  // p1 is starting at meeting node and wil traverse k - m nodes until it is at circle beginning
  while (p1 !== p2) {
    // as long as p1 and p2 dont meet, we will traverse (because we know that once they meet, that's the circle beginning)
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};
