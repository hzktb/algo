// leetcode 160
// given two linked lists, find the node where they intersect

// using two pointer method and traverse them at same speed
// if one pointer is at null, let it start again at the other list's head
// this ensures that they will traverse thru same amount of nodes since we dont know how many nodes there are bebore the intersect
// if both pointers meet at null, we know there is no intersection

const intersectionList = (head1, head2) => {
  let p1 = head1;
  let p2 = head2;

  while (p1 !== p2) {
    // the else condition was set because setting pointer to another list's head is actually traverse one step as well
    if (p1 === null) {
      p1 = head2;
    } else {
      p1 = p1.next;
    }
    if (p2 === null) {
      p2 = head1;
    } else {
      p2 = p2.next;
    }
  }
  return p1;
};
