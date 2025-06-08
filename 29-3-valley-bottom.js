// # Valley Bottom

// A _valley-shaped_ array is an array of integers such that:

// - It can be split into a non-empty prefix and a non-empty suffix,
// - The prefix is sorted in decreasing order,
// - The suffix is sorted in increasing order,
// - All the elements are unique.

// Given a valley-shaped array, `arr`, return the smallest value.

// ```
// Example 1: arr = [6, 5, 4, 7, 9]
// Output: 4

// Example 2: arr = [5, 6, 7]
// Output: 5. The prefix sorted in decreasing order is just [5].

// Example 3: arr = [7, 6, 5]
// Output: 5. The suffix sorted in increasing order is just [5].
// ```

// Constraints:

// - `2 ≤ arr.length ≤ 10^6`
// - `-10^9 ≤ arr[i] ≤ 10^9`

function smallest(arr) {

  function isBefore(i) {
    return arr[i] < arr[i-1] && arr[i] > arr[i+1];
  }

  if (!arr || arr.length == 0) {
    return error;
  }
  
  let l = 0;
  let r = arr.length-1;

  if (arr.length == 1) {
    return arr[0];
  }

  let mid = undefined;
  while (l < r-1) {
    mid = (r - l) / 2;
    if (isBefore(mid)) {
      l = mid;
    } else {
      r = mid;
    }
  }

  return arr[l] < arr[r] ? arr[l] : arr[r];
}

/*
Complexity:
Space: O(1).
We use extra space only for the tracking pointers and integer result, all constant space => O(1).
Time: O(log n).
This is a binary search.  We eliminate half of the search area each time => O(log n).
*/

console.log(smallest([6, 5, 4, 7, 9]));
console.log(smallest([5, 6, 7]));
console.log(smallest([7, 6, 5]));
console.log(smallest([10]));
