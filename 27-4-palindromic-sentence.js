// # Palindromic Sentence

// Given a string `s`, returne whether its letters form a palindrome ignoring punctuation, spaces, and casing.

// ```
// Example 1:
// Input: s = "Bob wondered, 'Now, Bob?'"
// Output: true
// Explanation: Considering only letters and ignoring case, we get "bobwonderednowbob" which is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: Considering only letters and ignoring case, we get "raceacar" which is not a palindrome.
// ```

// Constraints:
// - 0 ≤ s.length ≤ 10^6
// - s consists of printable ASCII characters

/*
Design:
This can be solved as a two-pointer problem.
*/

function sentencePalindrome(s) {

  function isAlpha(c) {
    return /^[A-Za-z]$/.test(c);
  }

  if (s.length == 0) return true;

  let l = 0;
  let r = s.length-1;

  while (l < r) {
    while (l < s.length && !isAlpha(s[l])) {
      l++;
    }
    while (r >= 0 && !isAlpha(s[r])) {
      r--;
    }
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

/*
Complexity:
Time: O(N).
We loop through the characters of the string N/2 times.
Nested inside is a call to isAlpha, which calls regex test, which **for a single character** is O(1).
O(1) nested inside O(N) => O(N).
Space: O(1).
We use extra space only for the tracking pointers => O(1).
*/

let s = undefined;

// Palindrome with punctuation, including at end
s = "Bob wondered, 'Now, Bob?'"
console.log(sentencePalindrome(s));

// Not a palindrome
s = "race a car";
console.log(sentencePalindrome(s));

// Empty string
s = "";
console.log(sentencePalindrome(s));

// Palindrome with a bunch of punctuation at beginning
s = "!@#$%^&Bob wondered, 'Now, Bob?'";
console.log(sentencePalindrome(s));

// Palindrome with a bunch of punctuation at end
s = "Bob wondered, 'Now, Bob?'&*%c^";
console.log(sentencePalindrome(s));

