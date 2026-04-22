// # Palindromic Sentence

// Given a string `s`, return whether its letters form a palindrome ignoring punctuation, spaces, and casing.

// Example 1:
// Input: s = "Bob wondered, 'Now, Bob?'"
// Output: true
// Explanation: Considering only letters and ignoring case, we get "bobwonderednowbob" which is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: Considering only letters and ignoring case, we get "raceacar" which is not a palindrome.

// Constraints:

// - 0 ≤ s.length ≤ 10^6
// - s consists of printable ASCII characters

/*
Approach:
Move pointers in from each end, skipping over non-letter characters.
When each pointer is pointing to a letter, compare the lowercase
version of the letters.  If they're the same, continue.  If
they're different return false.  If the left and right pointers
meet, return true.

Time complexity:
We visit each letter exactly once, so O(n).

Space complexity:
We only use 2 additional integer indices, so O(1).

Edge cases:
empty string
string all non-letters
string one letter followed by many non-letters
string many non-letters followed by one letter
*/

function palSentence(s) {
  let l = 0;
  let r = s.length-1;
  while (l < r) {
    while (!/^[a-z]$/i.test(s[l]) && l < s.length) {
      l++;
    }
    while (!/^[a-z]$/i.test(s[r]) && r >=0) {
      r--;
    }
    if (l >= r) {
      return true;
    }
    // console.log('l, r: ', s[l], s[r]);
    if (s[l].toLowerCase() === s[r].toLowerCase()) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(palSentence("Bob wondered, 'Now, Bob?'"));
console.log(palSentence('race a car'));
console.log(palSentence(""));
console.log(palSentence("/?>:%.  %#333"));
console.log(palSentence("a/?>:%.  %#333"));
console.log(palSentence("/?>:%.  %#333a"));
console.log(palSentence("/?>:b%.  %#333a"));
console.log(palSentence("/a?>:b%.  %#333a"));
