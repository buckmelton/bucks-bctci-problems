// # Array Reversal

// Reverse an array of letters, `arr`, in place using `O(1)` extra space.

// Example 1:
// Input: arr = ['h', 'e', 'l', 'l', 'o']
// Output: ['o', 'l', 'l', 'e', 'h']

// Example 2:
// Input: arr = ['a']
// Output: ['a']

// Example 3:
// Input: arr = []
// Output: []

// Constraints:

// - `0 ≤ arr.length ≤ 10^5`
// - `arr` contains only letters

function arrayReverse(arr) {
  let l = 0;
  let r = arr.length-1;
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
  return arr;
}

/*
Complexity:

We go through the loop N / 2 times, so time complexity is O(N / 2) => O(N).

For space complexity, we only create the two constant-sized pointers, so space complexity is O(1).
*/

let arr = ['h', 'e', 'l', 'l', 'o'];
console.log(arrayReverse(arr));

arr = ['a'];
console.log(arrayReverse(arr));

arr = [];
console.log(arrayReverse(arr));

arr = ['h', 'e'];
console.log(arrayReverse(arr));

arr = ['a', 'n', 'c', 'i', 'e', 'n', 't', 's' ];
console.log(arrayReverse(arr));

