// leetcode 234
// given a linked list, check if it is a palindrome

// use fast and slow pointer method to get to the middle of the list
// then reverse the second half of the list starting from the slow
// then traverse the reversed list and the original list as long as the second list's pointer is not null
// if loop terminates, then it is a palindrome
// if any vals is not the same then return false

const check = (head) => {
  // traverse to the middle of the list
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half of the list with slow being the head of the second half
  let secondHead = reverse(slow);

  // traverse the two linked list and check the vals until the secondHead reaches end of it's list
  while (secondHead !== null) {
    if (secondHead.val !== head.val) return false;
    secondHead = secondHead.next;
    head = head.next;
  }
  return true;
};

// reverse a linked list
const reverse = (head) => {
  if (head === null || head.next === null) return head;

  let last = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
