function qsort(arr) {
  // base case when the array passed down is either empty or only one element
  if (arr.length === 0 || arr.length === 1) return arr;

  // selecting the first element as the pivot and then create 2 empty arrays to host the left and right elements of the pivot
  const pivot = arr[0];
  let left = [];
  let right = [];

  //traverse thru the array and push in the elements to the corresponding arrays
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] >= pivot) {
      right.push(arr[i]);
    }
  }
  // recursive call where the calls will go all the way to the base case we setted above and when returned, the arrays will be concated in the fashion from least to greatest
  return [...qsort(left), pivot, ...qsort(right)];
}

// const arr = [111, 24, 34, 12];
const arr = [111, 224, 354, 12, 77, 12, 532];

console.log(qsort(arr));
