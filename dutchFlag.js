// # Dutch Flag Problem

// Given an array, `arr`, containing only of the characters 'R' (red), 'W' (white), and 'B' (blue), sort the array in place so that the same colors are adjacent, with the colors in the order red, white, and blue.

// Example 1:
// Input: arr = ['R', 'W', 'B', 'B', 'W', 'R', 'W']
// Output: ['R', 'R', 'W', 'W', 'W', 'B', 'B']

// Example 2:
// Input: arr = ['B', 'R']
// Output: ['R', 'B']

// Constraints:

// - 0 ≤ arr.length ≤ 10^6
// - arr[i] is either 'R', 'W', or 'B'

// Idea: use frequency counts to count up how many red, white and blue elements
// there are, then go back through array and simply overwrite array with the correct
// number of red, then white, then blue elements

// Time complexity: You go through the array twice, so 2*n => O(n).
// Space complexity: you need 3 counting variables, one for each color, either individual or in a hash => O(1)

function dutchFlag(arr) {
  const freqs = { R : 0,
                 W : 0,
                 B : 0
               };
  for (let elt of arr) {
    freqs[elt]++;
  }
  let i = 0;
  while (i < freqs['R']) {
    arr[i] = 'R';
    i++;
  }
  let whiteEnd = freqs['R'] + freqs['W'];
  while (i < whiteEnd) {
    arr[i] = 'W';
    i++;
  }
  while (i < arr.length) {
    arr[i] = 'B';
    i++;
  }
  return arr;
}

console.log(dutchFlag(['R', 'W', 'B', 'B', 'W', 'R', 'W']));
console.log(dutchFlag(['B', 'R']));
console.log(dutchFlag([]));
console.log(dutchFlag(['R', 'R', 'R', 'R']));
console.log(dutchFlag(['B', 'W', 'R']));
