// # Longest Consecutive Sequence

// You have a list of integers that is NOT in sorted order. Determine the maximum number of consecutive integers that appear in this list and output the length of that consecutive sequence. Your algorithm must achieve a linear runtime.

// ```
// Example 1:
// Input: arr = [10, 9, 1, 0, -1, -2, -3, 2, 4, 3, 6, 7]
// Output: 8
// Explanation: One of the longest runs of consecutive values is [-3, -2, -1, 0, 1, 2, 3, 4], which contains 8 numbers in a row.

// Example 2:
// Input: arr = [5, 2, 8, 9, 7, 6, 5, 10, 11, 12, 100]
// Output: 8
// Explanation: An extended chain of consecutive integers is [5, 6, 7, 8, 9, 10, 11, 12]. Even though 5 appears more than once, duplicates do not break the consecutive sequence.

// Example 3:
// Input: arr = [1, 16, 2, 0, 15, 10, 9, 8, -1, 11, 7, 12, 13, 14]
// Output: 10
// Explanation: The longest uninterrupted set is [7, 8, 9, 10, 11, 12, 13, 14, 15, 16], which has 10 consecutive numbers.

// Example 4:
// Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// Output: 20
// Explanation: The entire array forms one consecutive sequence.
// ```

// Constraints:

// - The length of `arr` is at most 10^5
// - Each element in `arr` is an integer between `-10^9` and `10^9`
// - The solution must run in `O(n)` time

/*
Design:
- Put all values into a Set. This will remove duplicates and provide constant-time access.
- Initialize maxSeqLength to 0;
- For each value in the array
  - If the value is still in the Set
    - Initialize curSeqLength to 1
    - Pull out from the Set all the values following the current number, incrementing the length of the sequence each time
    - Pull out from the Set all the values preceding the current number,
      incrememnt the length of the sequence each time
    - Set maxSeqLength to max of curSeqLength and maxSeqlength.
*/

function maxSequenceLength(arr) {
  const valSet = new Set(arr);
  let maxSeqLength = 0;
  for (const val of arr) {
    if (valSet.has(val)) {
      let curSeqLength = 1;
      valSet.delete(val);
      let nextSeqVal = val+1;
      while (valSet.has(nextSeqVal)) {
        curSeqLength++;
        valSet.delete(nextSeqVal);
        nextSeqVal++;
      }
      let prevSeqVal = val-1;
      while (valSet.has(prevSeqVal)) {
        curSeqLength++;
        valSet.delete(prevSeqVal);
        prevSeqVal--;
      }
      maxSeqLength = Math.max(maxSeqLength, curSeqLength);
    }
  }
  return maxSeqLength;
}

/*
Complexity:
Time: O(N).
- The set is created: O(N).
- We go through each value of the array once: O(N).
- For each value, we find, worst case, O(N) other values in a sequence, which
  would mean that no other values in the for loop will have sequences since
  all values will have been removed from the set.
- So, maximum O(3 * N) => O(N).
Space: O(N).
- The set we create is O(N).
- We create some integer tracking variables: O(1).
- O(N) + O(1) => O(N).
*/

let arr1 = [10, 9, 1, 0, -1, -2, -3, 2, 4, 3, 6, 7];
console.log(maxSequenceLength(arr1));

let arr2 = [5, 2, 8, 9, 7, 6, 5, 10, 11, 12, 100];
console.log(maxSequenceLength(arr2));

let arr3 = [1, 16, 2, 0, 15, 10, 9, 8, -1, 11, 7, 12, 13, 14];
console.log(maxSequenceLength(arr3));

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(maxSequenceLength(arr4));

let arr5 = [];
console.log(maxSequenceLength(arr5));

let arr6 = [0];
console.log(maxSequenceLength(arr6));

