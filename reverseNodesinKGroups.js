// leetcode 25
// given a linked list and a value k, reverse the nodes in groups of k
// ex: 1,2,3,4,5 k = 2 => ans = 2,1,4,3,5
// ex: 1,2,3,4,5 k = 3 => ans = 3,2,1,4,5 if the last group doesnt have k nodes, dont reverse

// this can be treated as an extension to reverse list at nth nodes and before, and we have to do it multiple times down the list
// set up a helper function to reverse the list from head to the nth node
// main function will take care of setting the new head and feed it into the helper function to reverse

// normal reverse of list recursively with base case where if head.next is the end, then return the head
const reverse = (head, end) => {
  if (head.next === end) return head;
  let last = reverse(head.next, end);
  head.next.next = head;
  head.next = end;
  return last;
};

const reverseKGroup = (head, k) => {
  // we need the two pointers here for node references because at some point the list will break
  let p1 = head;
  let p2 = head;
  // traverse p2 to the kth element and do the reverse from p1 to p2
  for (let i = 0; i < k; i++) {
    if (p2 === null) {
      // if the k is the same size as the list, p2 will be at null, but the loop will terminate befroe it reaches this if statement
      return head; // this is the case when there are not enough nodes to fill up a group of k nodes, no reverse will take place
    }
    p2 = p2.next; // traverse the p2 down to the kth element
  }
  // call the reverse function and get the new head of the reversed list
  let newHead = reverseList(p1, p2);

  // then make p1's next pointer point to the head of the rest of the list which is p2 right now
  p1.next = reverseKGroup(p2.next, k);

  return newHead;
};
