// String Matching
// Implement an index_of(s, t) method, which returns the first index where string t appears in string s, or -1 if s does not contain t.

// Example 1: s = "hello world", t = "world" Output: 6

// Example 2: s = "needle in a haystack", t = "needle" Output: 0

// Example 3: s = "needle in a haystack", t = "not" Output: -1

// Constraints:

// The input strings can contain any valid ASCII character
// The length of s is at most 10^5
// The length of t is at most 10^5
// t can be empty, in which case return 0
// s can be empty, in which case return -1 if t is non-empty, 0 if t is empty

function findIndex(s, t) {
  if (t.length == 0) return 0;
  if (s.length == 0) return -1;
  for (let si = 0; si < s.length - t.length + 1; si++) {
    if (s[si] === t[0]) {
      let ti = 1;
      while (ti < t.length && t[ti] === s[si + ti]) {
        ti++;
      }
      if (ti == t.length) {
        return si;
      }
    }
  }
  return -1;
}
