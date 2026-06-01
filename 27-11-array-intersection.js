// # Array Intersection

// Given two sorted arrays, `arr1` and `arr2`, return their _intersection_.

// The intersection is a new array that contains all elements that appear in both arrays, in sorted order, including duplicates.

// Example 1:
// Input:
// arr1 = [1, 2, 3]
// arr2 = [1, 3, 5]
// Output: [1, 3]
// Explanation: 1 and 3 appear in both arrays.

// Example 2:
// Input:
// arr1 = [1, 1, 1]
// arr2 = [1, 1]
// Output: [1, 1]
// Explanation: Two 1s appear in both arrays.

// Example 3:
// Input:
// arr1 = [1, 2, 2, 3]
// arr2 = []
// Output: []

// Constraints:

// - The input arrays are sorted in ascending order
// - 0 ≤ arr1.length, arr2.length ≤ 10^6
// - -10^9 ≤ arr1[i], arr2[i] ≤ 10^9

function arrayIntersection(arr1, arr2) {
  let result = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
    } else {
      if (arr1[p1] < arr2[p2]) {
        p1++;
      } else {
        p2++;
      }
    }
  }
  return result;
}

/*
Time complexity:
The arrays may be very different lengths, M (shorter) and N (longer).  Worst case, if all elements of shorter array M are at the end of array N, all elements of both arrays will be processed => O(M + N).
Space complexity:
We use two constant-space pointer variables, and we create a result array that worst case is the length of the shortest array => O(2 * 1) + O(M) => O(M).
*/

let arr1 = [1, 2, 3];
let arr2 = [1, 3, 5];
console.log(arrayIntersection(arr1, arr2));

arr1 = [1, 1, 1];
arr2 = [1, 1];
console.log(arrayIntersection(arr1, arr2));

arr1 = [1, 2, 2, 3];
arr2 = [];
console.log(arrayIntersection(arr1, arr2));

arr1 = [1, 2, 2, 3];
arr2 = [1, 2];
console.log(arrayIntersection(arr1, arr2));

arr1 = [1, 2, 2, 3];
arr2 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(arrayIntersection(arr1, arr2));

