// # Delete Operations

// You're given an array of `n` integers, `nums`, and another array of at most `n` integers, `operations`, where each integer represents an *operation* to be performed on `nums`.

// * If the operation number is `k ≥ 0`, the operation is "delete the number at index `k` in the **original** array if it has not been deleted yet. Otherwise, do nothing."
// * If the operation number is `-1`, the operation is "delete the smallest number in `nums` that has not been deleted yet, breaking ties by smaller index."

// Return the state of `nums` after applying all the operations.

// ```
// Example 1: nums = [50, 30, 70, 20, 80], operations = [2, -1, 4, -1]
// Output: [50]
// Explanation:
// - Delete index 2 in the original array, element 70: [50, 30, 20, 80]
// - Delete 20, the smallest non-deleted number: [50, 30, 80]
// - Delete index 4 in the original array, element 80: [50, 30]
// - Delete 30, the smallest non-deleted number: [50]

// Example 2: nums = [1, 2, 3], operations = []
// Output: [1, 2, 3]. No operations to perform.

// Example 3: nums = [1, 2, 3], operations = [-1, -1, -1]
// Output: []. All elements are deleted.
// ```

// Constraints:
// - 1 ≤ n ≤ 10^5
// - Each element in nums is between -10^9 and 10^9
// - operations.length ≤ n
// - Each element in operations is between -1 and n-1

/*
Design:
Create a second array with the integers sorted.
Iterate through all the operations.
If operation is -1, pop the first item of the sorted array, find the first occurence of that value in the original array, and set that location to null.
If the operation isn't -1, it's an index into the **original** array.  Get the value at that index in the original array, set that location to null, find the value in the sorted array, and delete it.
Create the result array from all the non-null values in the original array.
*/

/*
We learn from the optimal solution given in the book that executing each operation one at at time
is inefficient.  Instead, create a Set of the indices that should be deleted.  To determine the
indices of the smallest values, create an array of [value, index] tuples and sort on value; we can then
pop the index of the current smallest value easily and throw that index into the set.
However, it's time for me to move on, so I won't be implementing that here.
*/

function deleteOps(nums, operations) {

  let minVal = undefined;
  let i = undefined;
  let iVal = undefined;
  let si = undefined;
  let numsSorted = nums.toSorted();
  for (let op of operations) {
    if (op == -1) {
      minVal = numsSorted.shift();
      i = nums.indexOf(minVal);
      nums[i] = null;
    } else { // op is index into orig array
      iVal = nums[op];
      nums[op] = null;
      si = numsSorted.indexOf(iVal);
      numsSorted.splice(si, 1);
    }
  }
  return nums.filter(num => num !== null);
}

/*
Complexity:
Time: O(N log N + M) where N is the size of nums and M is the size of operations.
We sort nums, which under the hood is likely N log N.
Added to that, we loop through all M operations once.
Added to that we iterate once through all remaining nums; worst case there are N.
N log N + M + N => O(N log N + M).
Space: O(N).
We use 2 auxiliary arrays of (max) size N, 1 for the sorted array and 1 for the
result, and a bunch of constant-sized tracking variables => O(N) + O(N) + O(1) => O(N).
*/

let nums = [];
let operations = [];

nums = [50, 30, 70, 20, 80];
operations = [2, -1, 4, -1];
console.log(deleteOps(nums, operations));

nums = [1, 2, 3];
operations = [];
console.log(deleteOps(nums, operations));

nums = [1, 2, 3];
operations = [-1, -1, -1];
console.log(deleteOps(nums, operations));

nums = [50, 30, 70, 20, 80];
operations = [2, -1, 2, -1];
console.log(deleteOps(nums, operations));

nums = [50, 30, 70, 20, 80, 70];
operations = [2, -1, 2, -1];
console.log(deleteOps(nums, operations));

nums = [50, 30, 70, 30, 30, 20, 80];
operations = [2, -1, 2, -1];
console.log(deleteOps(nums, operations));

