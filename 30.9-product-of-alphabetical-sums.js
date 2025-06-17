// # Product of Alphabetical Sums

// Given a list of lowercase strings, `words`, where each string has between `1` and `3` letters, determine if there exist three strings such that the product of their _alphabetical sums_ is a given target value, `target`. The alphabetical sum of a string is the sum of the positions of its letters in the alphabet (e.g., the alphabetical sum of "abz" is 1 + 2 + 26 = 29). Return true if such a triplet exists. The same string can be used more than once.

// ```
// Example 1: words = ["abc", "fg", "hij", "klm", "nop", "qrs", "vwx"], target = 1620
// Output: true
// Explanation: The triplet is "abc", "abc", "nop": 6 * 6 * 45 = 1620.

// Example 2: words = ["a", "b"], target = 2
// Output: true
// Explanation: The triplet is "a", "a", "b": 1 * 1 * 2 = 2.

// Example 3: words = ["a", "b", "c"], target = 7
// Output: false
// Explanation: No triplet of strings has a product of alphabetical sums equal to 7.
// ```

// Constraints:

// - `0 ≤ words.length ≤ 10^5`
// - Each string in `words` has length between 1 and 3
// - All strings contain only lowercase English letters
// - `1 ≤ target ≤ 10^6`

/*
Design:
Similar to solution for three-sum problem.
For each word
  Compute its alpha sum
  If its alpha sum is an integer divisor of the target
    For each word, compute its alpha sum
      If its alpha sum is an integer divisor of the target
        Put the product of the two words into a Set (since we are only returning true or false, and we can use words more than once, we don't need to remember the words or their locations, or how many times we've used them, so a Set will suffice).
        If target / product is in the Set, we've found what we want, return true
Return false
*/

function prodOfAlphaSums(words, target) {

  function alphaSum(w) {
    let sum = 0;
    for (let ch of w) {
      sum += ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
    return sum;
  }

  let as1 = undefined;
  let as2 = undefined;
  let twoProducts = new Set();
  for (let word1 of words) {
    as1 = alphaSum(word1);
    if (Number.isInteger(target / as1)) {
      for (let word2 of words) {
        as2 = alphaSum(word2);
        let twoProduct = as1 * as2;
        if (Number.isInteger(target / as2)) {
          twoProducts.add(twoProduct);
        }
        if (twoProducts.has(target / twoProduct)) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(prodOfAlphaSums(["abc", "fg", "hij", "klm", "nop", "qrs", "vwx"], 1620));
console.log(prodOfAlphaSums(['a', 'b'], 2));
console.log(prodOfAlphaSums(['a', 'b'], 7));

/*
Complexity:
Space: O(N), where N is the number of words in the array.
We need a Set, that worst case is size N, and a few summing variables that are constant space => O(N) + O(1) => O(N).
Time: O(N**2) worst case, where N is the number of words, and M is the average number of letters per word.
We have 2 nested loops that iterate over very word in the array => O(N**2).
*/