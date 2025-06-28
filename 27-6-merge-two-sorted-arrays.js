// # Merge Two Sorted Arrays

// Given two sorted arrays of integers, `arr1` and `arr2`, return a new array that contains all the elements in `arr1` and `arr2` in sorted order, including duplicates.

// ```
// Example 1:
// Input: 
// arr1 = [1, 3, 4, 5]
// arr2 = [2, 4, 4]
// Output: [1, 2, 3, 4, 4, 4, 5]
// Explanation: All elements are merged in sorted order.

// Example 2:
// Input:
// arr1 = [-1]
// arr2 = []
// Output: [-1]
// Explanation: When one array is empty, the result is just the other array.

// Example 3:
// Input:
// arr1 = [1, 3, 5]
// arr2 = [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
// ```

// Constraints:
// - arr1 and arr2 are sorted in ascending order
// - 0 ≤ arr1.length, arr2.length ≤ 10^6
// - -10^9 ≤ arr1[i], arr2[i] ≤ 10^9

function mergeArrays(arr1, arr2) {
  const res = [];
  let ptr1 = 0;
  let ptr2 = 0;
  while (ptr1 < arr1.length && ptr2 < arr2.length) {
    if (arr1[ptr1] <= arr2[ptr2]) {
      res.push(arr1[ptr1]);
      ptr1++;
    } else {
      res.push(arr2[ptr2]);
      ptr2++;
    }
  }
  if (ptr1 < arr1.length) {
    for ( ; ptr1 < arr1.length; ptr1++) {
      res.push(arr1[ptr1]);
    }
  } else {
    for ( ; ptr2 < arr2.length; ptr2++) {
      res.push(arr2[ptr2]);
    }
  }
  return res;
}

/* 
Complexity:
Time: O(N+M) where N is the size of arr1 and M is the size of arr2.
We process each element of each array one time, performing a simple test and then a simple push onto the end of the array stack =>O(N+M).
Space: O(N+M).
We create a result array that has exactly N+M elements, and two constant-sized integer pointer variables.
*/

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 4];
console.log(mergeArrays(arr1, arr2));

let arr3 = [-1];
let arr4 = [];
console.log(mergeArrays(arr3, arr4));

let arr5 = [1, 3, 5];
let arr6 = [2, 4, 6];
console.log(mergeArrays(arr5, arr6));

let arr7 = [-100, -50, 4, 5, 9, 100];
let arr8 = [-200, -88, -77, -66, 4, 4, 6];
console.log(mergeArrays(arr7, arr8));

