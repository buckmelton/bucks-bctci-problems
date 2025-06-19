// # Word Expansion Class

// Implement a class, `Checker`, that receives a string `s` upon initialization. The class must support a method, `expands_into(s2)`, which takes another string and checks if `s2` can be formed by adding exactly one letter to `s1` and reordering the letters. All letters in both strings are lowercase alphabetical characters.

// ```
// Example 1:
// checker = Checker("tea")
// print(checker.expands_into("tea"))   # returns False
// print(checker.expands_into("team"))  # returns True
// print(checker.expands_into("seam"))  # returns False

// Example 2:
// checker = Checker("on")
// print(checker.expands_into("nooo"))  # returns False
// print(checker.expands_into("not"))   # returns True
// print(checker.expands_into("now"))   # returns True

// Example 3:
// checker = Checker("")
// print(checker.expands_into("a"))     # returns True
// print(checker.expands_into(""))      # returns False
// print(checker.expands_into("ab"))    # returns False
// ```

// Constraints:
// - The length of s and s2 is at most 10^5
// - All characters are lowercase English letters

/*
Design:
Iterate over the letters of each word.  Since there may be duplicate letters that need to be accounted for, we can't use Sets.  Instead, create a Map from s, where the key is the character and the value is the frequency count of chars seen in s.  Iterate over the letters of s2.  If the s2 letter is in the Map, decrement the count (including beyond 0 to -1 etc).  If the letter s2 is not in the map, add it to the map with count -1. After we've processed s2, there should be exactly one element in the Map with count -1.
Edge cases / cases of interest:
  - s is the empty string.  Return true if s2.size == 1, false otherwise
  - s2 is the empty string.  Return false.
  - s2 has 2 of a letter in s
  - s2 has 3 of a letter in s
  - s has 2 of a letter in s2
  - s has 3 of a letter in s2
  - s2 has exactly 2 duplicated letters, one of which appears once in s
*/

class Checker {
  constructor(s) {
    this.s = s;
  }

  expandsInto(s2) {
    let freq = {};
    for (let ch of this.s) {
      if (freq[ch]) {
        freq[ch] = freq[ch] + 1;
      } else {
        freq[ch] = 1;
      }
    }

    for (let ch2 of s2) {
      if (freq[ch2]) {
        if (freq[ch2] == 1) {
          delete freq[ch2];
        } else {
          freq[ch2] = freq[ch2] - 1;
        }
      } else {
        freq[ch2] = -1;
      }
    }

    return Object.entries(freq).length == 1 && Object.values(freq)[0] == -1;
  }
}

/* 
Complexity:
Space: O(N + M), where N is the number of elements in s and M is the number of elements in s2.
We are creating a map that, worst case, includes as elements all the chars from s plus all the chars from s2, and the result is a boolean => O(1).
Time: O(N+M).
We process each letter from both strings once.
*/

let checker = new Checker('tea');
console.log(checker.expandsInto('team'));
console.log(checker.expandsInto('seam'));
console.log('');

checker = new Checker('on');
console.log(checker.expandsInto('noon'));
console.log(checker.expandsInto('not'));
console.log(checker.expandsInto('now'));
console.log('');

checker = new Checker('');
console.log(checker.expandsInto('a'));
console.log(checker.expandsInto(''));
console.log(checker.expandsInto('ab'));
