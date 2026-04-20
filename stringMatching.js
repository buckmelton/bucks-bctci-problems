// # String Matching

// Implement an `index_of(s, t)` method, which returns the first index where string `t` appears in string `s`, or -1 if `s` does not contain `t`.

// Example 1: s = "hello world", t = "world"
// Output: 6

// Example 2: s = "needle in a haystack", t = "needle"
// Output: 0

// Example 3: s = "needle in a haystack", t = "not"
// Output: -1

// Constraints:

// - The input strings can contain any valid ASCII character
// - The length of `s` is at most `10^5`
// - The length of `t` is at most `10^5`
// - `t` can be empty, in which case return `0`
// - `s` can be empty, in which case return `-1` if `t` is non-empty, `0` if `t` is empty

/*
Approach:
if t.length == 0:
  return 0
if s.length == 0:
  return -1
lastSIdx = 0;
sIdx = lastSIdx;
tIdx = 0
While not past end of s and not past end of t:
  If s[sIdx] !== t[tIdx]:
    lastSIdx++;
    sIdx = lastSIdx;
    tIdx = 0;
  Else:
    If tIdx === t.length -1:
      return lastSIdx;
    sIdx++;
    tIdx++;

  Time complexity:
  Worst case, we go through each letter of s, and for each letter of s, we go
  through each letter of t.  So time is O(s*t).

  Space complexity:
  We use 3 tracking integers.  So space complexity is O(1).
  
*/

/* Notes:
This approach is a naive approach with O(s * t) time.
A better approach is the Rabin-Karp algorithm, which calculates a hash of t and a rolling hash on s.
The key formula is: newHash = (oldHash - char * base^(len-1)) * base + newChar, all mod a large prime.
The base for ASCII strings would be 128, the large prime is conventionally chosen as 10^9 + 7 (1000000007).
*/

function indexOf(s, t) {
  if (t.length === 0) return 0;
  if (s.length === 0) return -1;
  if (t.length > s.length) return -1;
  let prevSIdx = 0;
  let sIdx = prevSIdx;
  let tIdx = 0;
  while (sIdx < s.length && tIdx < t.length) {
    if (s[sIdx] !== t[tIdx]) {
      prevSIdx++;
      sIdx = prevSIdx;
      tIdx = 0;
    } else {
      if (tIdx == t.length-1) {
        return prevSIdx;
      }
      sIdx++;
      tIdx++;
    }
  }
  return -1;
}

console.log(indexOf('hello world', 'world'));
console.log(indexOf('needle in a haystack', 'needle'));
console.log(indexOf('needle in a haystack', 'not'));
