// # Prefix Suffix Swap

// We are given an array of letters, `arr`, with a length, `n`, which is a multiple of `3`. The goal is to modify `arr` in place to move the prefix of length `n/3` to the end and the suffix of length `2n/3` to the beginning.

// ```
// Example 1:
// Input: arr = ['b', 'a', 'd', 'r', 'e', 'v', 'i', 'e', 'w']
// Output: ['r', 'e', 'v', 'i', 'e', 'w', 'b', 'a', 'd']
// Explanation: The first third (bad) moves to the end, while the rest (review) stays in order.

// Example 2:
// Input: arr = ['a', 'b', 'c']
// Output: ['b', 'c', 'a']

// Example 3:
// Input: arr = []
// Output: []
// ```

// Constraints:
// - The length of arr is divisible by 3
// - 0 ≤ arr.length ≤ 10^6
// - arr[i] is a letter

function prefixSuffixSwap(arr) {
  const n = arr.length / 3;
  const prefix = arr.splice(0, n);
  arr.splice(2 * n, 0, ...prefix);
  return arr;
}

/*
Complexity:
Time: O(N).  'splice()' is called twice, and splice() is an O(N) operation.
Space: O(N).  The only extra space used is saving 'n' (on which the length of the prefix and the suffix is based), and saving a temporary copy of the prefix array, which is 1/3 of 'n' => O(N).
*/

let arr = undefined;

arr = ['b', 'a', 'd', 'r', 'e', 'v', 'i', 'e', 'w'];
console.log(prefixSuffixSwap(arr));

arr = ['a', 'b', 'c'];
console.log(prefixSuffixSwap(arr));

arr = [];
console.log(prefixSuffixSwap(arr));

