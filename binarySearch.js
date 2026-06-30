// # Search in Sorted Array

// Given a sorted array of integers, `arr`, and a target value, `target`, return the target's index if it exists in the array or `-1` if it doesn't.

// Example 1: arr = [-2, 0, 3, 4, 7, 9, 11], target = 3
// Output: 2. The target 3 is at index 2.

// Example 2: arr = [-2, 0, 3, 4, 7, 9, 11], target = 2
// Output: -1. The target 2 is not in the array.

// Example 3: arr = [1, 2, 3], target = 1
// Output: 0. The target 1 is at index 0.

// Constraints:

// - `0 ≤ arr.length ≤ 10^6`
// - `-10^9 ≤ arr[i], target ≤ 10^9`
// - `arr` is sorted in ascending order, without duplicates

/*
Approach:
This is a simple, basic, binary search problem.  I'm using the generalized binary
search recipe:

- Define an isBefore function to find the transition point in the array, that is,
to determine if a given value is before the desired
value or after the desired value.  In this case it's trivial, but there are other
binary search applications where this is more complicated.

- Handle edge cases: no range, target is before everything in the array, target
is after everything in array.

- Peform a binary search until left pointer and right pointer are right next to
each other, halving search region at each point.  In this way we are guaranteed
that either l or r will point to the target, or the target does not exist.
*/

function sortedSearch(arr, target) {
  // implement isBefore here, which returns whether the passed value
  // is before or after the target value.
  function isBefore(val) {
    return val < target;
  }

  // Handle edge cases: no range, target < left, target > right
  if (arr.length == 0) return -1;
  if (target < arr[0]) return -1;
  if (target > arr[arr.length-1]) return -1;

  // binary search until l and r are next to each other
  let l = 0;
  let r = arr.length-1;
  let mid;
  while (r - l > 1) {
    mid = Math.floor((r + l) / 2);
    if (isBefore(arr[mid])) {
      l = mid;
    } else {
      r = mid;
    }
  }
  if (arr[r] == target) {
    return r;
  } else {
    if (arr[l] == target) {
      return l;
    } else {
      return -1;
    }
  }
}



