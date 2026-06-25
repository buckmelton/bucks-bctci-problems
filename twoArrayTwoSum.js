// # 2-Array 2-Sum

// You are given two non-empty arrays of integers, `sorted_arr` and `unsorted_arr`. The first one is sorted, but the second is not. The goal is to find one element from each array with sum `0`. If you can find them, return an array with their indices, starting with the element in `sorted_arr`. Otherwise, return `[-1, -1]`. Use `O(1)` _extra space_ and do not modify the input.

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

// Constraints:

// - `1 ≤ sorted_arr.length, unsorted_arr.length ≤ 10^6`
// - -`10^9 ≤ sorted_arr[i], unsorted_arr[i] ≤ 10^9`
// - `sorted_arr` is sorted in ascending order
// - The arrays have no duplicates
// - Use `O(1)` _extra space_ and do not modify the input
