// # Dutch Flag Problem

// Given an array, `arr`, containing only of the characters 'R' (red), 'W' (white), and 'B' (blue), sort the array in place so that the same colors are adjacent, with the colors in the order red, white, and blue.

// ```
// Example 1:
// Input: arr = ['R', 'W', 'B', 'B', 'W', 'R', 'W']
// Output: ['R', 'R', 'W', 'W', 'W', 'B', 'B']

// Example 2:
// Input: arr = ['B', 'R']
// Output: ['R', 'B']
// ```

// Constraints:
// - 0 ≤ arr.length ≤ 10^6
// - arr[i] is either 'R', 'W', or 'B'

/*
Design:
This is a string manipulation problem / pointer problem.  The naive solution would be to go through and find and move all the R's, then go through and find and move all the W's, then all the B's.  Instead, we use 3 pointers: a pointer to where the next R should go, a pointer to where the next W should go, and a pointer to where the next B should go.  They all start at 0.  We go through each letter once.  When we encounter an R, we insert it at R, and increment R, W, and B (since the whole array to the right of R, which included the W and B sections, has been moved to the right).  When we encounter a W, we insert it at W, and incrememt W and B pointers.  When we encounter a B, we put it at B and increment B.
A tiny optimization: if the letter we're currently inspecting belongs in that position (i.e. cur == the pointer for the color it points to), we can skip moving the element, because it's already in the right place.  But we still need to increment the appropriate pointers. If there are more than a couple W's and B's in the array, this scenario will occur VERY rarely.
*/

function dutchFlag(arr) {
  // r, w, b always point to where the next r, w, b should be inserted
  let r = 0;
  let w = 0;
  let b = 0;
  let cur = 0;
  while (cur < arr.length) {
    switch (arr[cur]) {
      case 'R':
        if (r != cur) {
          let rToMove = arr.splice(cur, 1)[0];
          arr.splice(r, 0, rToMove);
        }
        r++;
        w++;
        b++;
        // console.log('arr: ', arr);
        // console.log('r,w,b: ', r, w, b);
        break;
      case 'W':
        if (w != cur) {
          let wToMove = arr.splice(cur, 1)[0];
          arr.splice(w, 0, wToMove);
        }
        w++;
        b++;
        // console.log('arr: ', arr);
        // console.log('r,w,b: ', r, w, b);
        break;
      case 'B':
        if (b != cur) {
          let bToMove = arr.splice(cur, 1)[0];
          arr.splice(b, 0, bToMove);
        }
        b++;
        // console.log('arr: ', arr);
        // console.log('r,w,b: ', r, w, b);
        break;
    }
    cur++
  }
  return arr;
}

/*
Complexity:
Space: O(1).
Since the movement of elements is done in-place, the only extra
space we're using is the 4 pointers => O(1).
Time: O(n) (or possibly O(n**2), depending on how you count
built in functions).
We only need to process each letter once => O(n).
Of course, under the hood, the JavaScript splice() method takes O(n), and splice is potentially done twice per letter => O(n) * 2 * O(n) => O(n**2).
*/

console.log(dutchFlag(['R', 'W', 'B', 'B', 'W', 'R', 'W']));
console.log(dutchFlag(['B', 'R']));
console.log(dutchFlag([]));
console.log(dutchFlag(['B', 'B', 'B', 'B', 'B', 'W', 'W', 'W', 'W', 'R', 'R', 'R']));
