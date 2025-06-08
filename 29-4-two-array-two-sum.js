// # 2-Array 2-Sum

// You are given two non-empty arrays of integers, `sorted_arr` and `unsorted_arr`. The first one is sorted, but the second is not. The goal is to find one element from each array with sum `0`. If you can find them, return an array with their indices, starting with the element in `sorted_arr`. Otherwise, return `[-1, -1]`. Use `O(1)` _extra space_ and do not modify the input.

// ```
// Example 1:
// sorted_arr = [-5, -4, -1, 4, 6, 6, 7]
// unsorted_arr = [-3, 7, 18, 4, 6]
// Output: [1, 3]
// Explanation: We can use -4 from the sorted array and 4 from the unsorted array.

// Example 2:
// sorted_arr = [1, 2, 3]
// unsorted_arr = [1, 2, 3]
// Output: [-1, -1]
// Explanation: No pair of elements sums to 0.

// Example 3:
// sorted_arr = [-2, 0, 1, 2]
// unsorted_arr = [0, 2, -2, 4]
// Output: [0, 1]
// Explanation: We can use -2 from the sorted array and 2 from the unsorted array.
// ```

// Constraints:

// - `1 ≤ sorted_arr.length, unsorted_arr.length ≤ 10^6`
// - -`10^9 ≤ sorted_arr[i], unsorted_arr[i] ≤ 10^9`
// - `sorted_arr` is sorted in ascending order
// - The arrays have no duplicates
// - Use `O(1)` _extra space_ and do not modify the input

/*
Design:
Basically this is like an iterative binary search.  For each element in the unsorted array, we're going to do a binary search of the sorted array.  If we didn't have the constraint of O(1) extra space, we could track the values we've seen and use those as we iterate through the unsorted array looking for zero sums.  Since we can't use more than O(1) extra space, we'll have to do a binary search on each iteration.
As sppm as we find a sum that equals zero, stop and return the two indices of the values that sum to 0.
*/

function twoArrayTwoSum(sArr, unsArr) {

  function findInd(val, arr) {

    function isBefore(val) {
      return val < sArr[mid];
    }

    let l = 0;
    let r = sArr.length;
    let mid = undefined;
    while (l < r - 1) {
      mid = Math.floor(((r-l) / 2) + l);
      if (isBefore(val)) {
        r = mid;
      } else {
        l = mid;
      }
    }
    return sArr[l] == val ? l : -1;
  }

  for (let i = 0; i < unsArr.length; i++) {
    let foundInd = findInd(unsArr[i] * -1);
    if (foundInd != -1) {
      return [foundInd, i];
    }
  }

  return [-1, -1];
}

/*
Complexity:
Space: O(1).
The only extra space we use is constant-space integer pointers for the binary search => O(1).
Time: O(N1 log N2), where N1 is the length of the unsorted array, and N2 is the length of the sorted array.
Worst case, we need to iterate through N1 items in the unsorted array, and do a binary search each time in the N2 items of the
sorted array, trying to find the complement => N * log N worst case => O(N log N).
*/

console.log(twoArrayTwoSum(
  [-5, -4, -1, 4, 6, 6, 7],
  [-3, 7, 18, 4, 6]
));

console.log(twoArrayTwoSum(
  [1, 2, 3],
  [1, 2, 3]
));

console.log(twoArrayTwoSum(
  [-2, 0, 1, 2],
  [0, 2, -2, 4]
));


