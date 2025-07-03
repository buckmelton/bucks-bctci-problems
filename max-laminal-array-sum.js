// # Laminal Arrays

// We are given an array, `arr`, whose **length is a power of 2**. We determine if an array is *laminal* as follows:
// - The array `arr` is laminal.
// - Each half of a laminal array is laminal.
// - A subarray of `arr` with a single element is laminal.

// Find the laminal subarray in `arr` with maximum sum and return its sum.

// ```
// Example 1: arr = [3, -9, 2, 4, -1, 5, 5, -4]
// Output: 6
// The laminal arrays are:
// [3, -9, 2, 4, -1, 5, 5, -4],
// [3, -9, 2, 4], [-1, 5, 5, -4],
// [3, -9], [2, 4], [-1, 5], [5, -4],
// [3], [-9], [2], [4], [-1], [5], [5], [-4]
// The one with the maximum sum is [2, 4].

// Example 2: arr = [1]
// Output: 1

// Example 3: arr = [-1, -2]
// Output: -1

// Example 4: arr = [1, 2, 3, 4]
// Output: 10

// Example 5: arr = [-2, -1, -4, -3]
// Output: -1
// ```

// Constraints:
// - The length of arr is a power of 2
// - 1 ≤ len(arr) ≤ 10^5
// - -10^9 ≤ arr[i] ≤ 10^9

function maxLaminal(arr) {
  let res = undefined;

  function maxLaminalHelper(arr) {
    if (arr.length == 1) {
      return arr[0];
    } else {
      let red = arr.reduce((acc, cur) => acc + cur);
      let left = maxLaminalHelper(arr.slice(0, arr.length / 2 ));
      let right = maxLaminalHelper(arr.slice(arr.length / 2))
      return Math.max(red, left, right);
    }
  }

  return maxLaminalHelper(arr);
}

/* 
Complexity:
Time: O(N).
We process all 2*N laminal arrays or the original array => O(N).
Space: O(log N).
The call stack never has more than log N items on it.
*/

let arr1 = [3, -9, 2, 4, -1, 5, 5, -4];
console.log(maxLaminal(arr1));

let arr2 = [1];
console.log(maxLaminal(arr2));

let arr3 = [-1, -2];
console.log(maxLaminal(arr3));

let arr4 = [1, 2, 3, 4];
console.log(maxLaminal(arr4));

let arr5 = [-2, -1, -4, -3];
console.log(maxLaminal(arr5));

let arr6 = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20];
console.log(maxLaminal(arr6));

