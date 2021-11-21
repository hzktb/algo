// leetcode 83
// given a sorted array, remove any duplicates and maintain the list sorted

// use 2 pointer method i and j
// if i === j, then only traverse j
// if i !== j, then make i.next = j, then traverse i to i.next and traverse j to j.next
// then at the end make sure i is pointing to null

const removeDuplicate = (head) => {
  if (!head) return null;

  let i = head;
  let j = head;
  while (j !== null) {
    if (i.val !== j.val) {
      i.next = j;
      i = i.next;
    }
    j = j.next;
  }
  i.next = null;
  return head;
};
