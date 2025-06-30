// # Quicksort Partition
// Note: this is not a quicksort implementation, this is only
// the first sort, but IN-PLACE, which makes is more difficult.
// The traditiona full quicksort is not in-place, creating separate
// arrays for the increasingly smaller partitions and then concatenating them.

// Given an array of integers, `arr`, and an integer, `pivot`, modify `arr` in place using only O(1) extra space so that (1) every element smaller than the pivot appears before every element greater than or equal to the pivot, and (2) every element larger than the pivot appears after every element smaller than or equal to the pivot.

// The relative order of the elements smaller than or greater than the pivot does not matter.

// ```
// Example 1:
// Input: arr = [1, 7, 2, 3, 3, 5, 3], pivot = 4
// Output: [1, 2, 3, 3, 3, 7, 5]
// Explanation: The array is partitioned into:
// - Elements less than 4: [1, 2, 3, 3, 3]
// - Elements equal to 4: []
// - Elements greater than 4: [7, 5]
// Other orders, such as [3, 2, 1, 3, 3, 5, 7], would also be valid.

// Example 2:
// Input: arr = [1, 7, 2, 3, 3, 5, 3], pivot = 3
// Output: [1, 2, 3, 3, 3, 7, 5]
// Explanation: The array is partitioned into:
// - Elements less than 3: [1, 2]
// - Elements equal to 3: [3, 3, 3]
// - Elements greater than 3: [7, 5]
// Other orders, such as [2, 1, 3, 3, 3, 5, 7], would also be valid.
// ```

// Constraints:

// - 0 ≤ arr.length ≤ 10^6
// - -10^9 ≤ arr[i], pivot ≤ 10^9

function qsPartition(arr, pivot) {
  function swap(arr, l, r) {
    let tmp = arr[l];
    arr[l] = arr[r];
    arr[r] = tmp;
  }

  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    while (arr[l] < pivot && l < r) {
      l++;
    }
    while (arr[r] >= pivot && r > l) {
      r--;
    }
    swap(arr, l, r);
  }
  return arr;
}

/*
Complexity:
Time: O(N), where N is the size of arr.
We process each of the N elements exactly once.
Space: O(1).
We use two constant-sized integer pointers, and the result is done in-place, requiring no extra space.
*/

let arr1 = [1, 7, 2, 3, 3, 5, 3];
let pivot1 = 4;
console.log(qsPartition(arr1, pivot1));

let arr2 = [1, 7, 2, 3, 3, 5, 3];
let pivot2 = 3;
console.log(qsPartition(arr2, pivot2));

let arr3 = [10, 9, 8, 7, 6, 5, 4, 3];
let pivot3 = 10;
console.log(qsPartition(arr3, pivot3));

let arr4 = [4];
let pivot4 = 1000;
console.log(qsPartition(arr4, pivot4));

let arr5 = [3, 2, 3, 2, 3, 2, 3, 2, 3];
let pivot5 = 3;
console.log(qsPartition(arr5, pivot5));

let arr6 = [];
let pivot6 = 3;
console.log(qsPartition(arr6, pivot6));
