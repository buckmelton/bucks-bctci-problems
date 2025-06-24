// # Compress Array

// Given an array of integers, `arr`, a *compress operation* finds the first pair of consecutive equal numbers and combines them into their sum. If there are no consecutive equal numbers, the array is considered fully compressed. Your goal is to repeatedly compress the array until it is fully compressed.

// ```
// Example 1: arr = [8, 4, 2, 2, 2, 4]
// Output: [16, 2, 4].
// The steps are [8, 4, 2, 2, 2, 4] -> [8, 4, 4, 2, 4] -> [8, 8, 2, 4] -> [16, 2, 4]

// Example 2: arr = [4, 4, 4, 4]
// Output: [16]
// The steps are [4, 4, 4, 4] -> [8, 4, 4] -> [8, 8] -> [16]

// Example 3: arr = [1, 2, 3, 4]
// Output: [1, 2, 3, 4]
// ```

// Constraints:
// - The length of arr is at most 10^5
// - Each element in arr is a non-negative integer less than 10^3

function compress(arr) {
  const stack = [];

  function merge(num) {
    if (stack.length == 0 || stack[stack.length-1] != num) {
      stack.push(num);
    } else {
      let newNum = stack.pop() + num;
      merge(newNum);
    }
  }

  for (let num of arr) {
    merge(num);
  }

  return stack;
}

/*
Complexity:
Time: O(N), where N is the size of the original array.  We process each number of the original array once, and the most merging we do, worst case is another N times => O(2*N) => O(N).
Space: O(N).  We create one constant-size temp integer variable, and we create a stack that will hold the result that will be of size N worst case: O(N) + O(1) => O(N).
*/

let arr = undefined;

arr = [8, 4, 2, 2, 2, 4];
console.log(compress(arr));

arr = [4, 4, 4, 4];
console.log(compress(arr));

arr = [1, 2, 3, 4];
console.log(compress(arr));
