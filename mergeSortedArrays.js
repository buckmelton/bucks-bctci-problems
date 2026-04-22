// # Merge Two Sorted Arrays

// Given two sorted arrays of integers, `arr1` and `arr2`, return a new array that contains all the elements in `arr1` and `arr2` in sorted order, including duplicates.

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

// Constraints:

// - arr1 and arr2 are sorted in ascending order
// - 0 ≤ arr1.length, arr2.length ≤ 10^6
// - -10^9 ≤ arr1[i], arr2[i] ≤ 10^9

/*
Approach:
Init result array
Start at left end of arr1 and arr2
While there are still elements in both arr1 and arr2:
  Push lesser of cur arr1 and cur arr2 onto result
  Increment index for the one you pushed
// When we reach here, we've finished with either or both arr1 and arr2
If arr1 index past end of arr1:
  Push the rest of arr2 onto result
If arr2 index past end of arr2:
  Push the rest of arr1 onto result
// If they are both past the end, the pushes will be no-ops
Return result

Time complexity:
Worst case arr1 and arr2 are the same size and we go through each element of both arr1 and arr2 => O(2n) => O(n).

Space complexity:
We have two integer indices, and a result array whose length is arr1.length
= n + arr2.length = m => O(1) + O(n+m) => O(n+m).

Edge cases:
arr1 empty
arr2 empty
arr1 and arr2 empty
arr1.length == 1
arr2.length == 1
all elements of arr1 > all elements of arr2
*/

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  if (i >= arr1.length) {
    result = [...result, ...arr2.slice(j)];
  } else {
    result = [...result, ...arr1.slice(i)];
  }
  return result;
}

console.log(mergeSortedArrays([1, 3, 4, 5], [2, 4, 4]));
console.log(mergeSortedArrays([-1], []));
console.log(mergeSortedArrays([1,3,5], [2,4,6]));
console.log(mergeSortedArrays([], [3,5,9]));
console.log(mergeSortedArrays([], []));
console.log(mergeSortedArrays([8], [1,3,7,11]));
console.log(mergeSortedArrays([1,3,7,11], [8]));
console.log(mergeSortedArrays([100,200,300], [2,3,4,5,6]));
