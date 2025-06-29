// # Hangman Word Matching

// You're given:

// 1. An array of valid words.
// 2. A pattern string that represents a partially revealed word (e.g., "H _ N G _ _").
//    - Each known letter appears in its exact position.
//    - Each unknown position is indicated by an underscore ('_').
// 3. A set of incorrectly guessed letters that you already know are not in the word.

// Goal: Determine how many words from the valid words list could still be the secret word based on:

// - The pattern's known letters (they must match exactly in the same positions).
// - The underscores (unknown letters can be anything except the letters you know are incorrect).
// - The set of letters that are known to be incorrect (none of these letters should appear in any position).

// Return the count of valid words that match the given Hangman state.

// ```
// Example 1:
// Input: valid_words = ["cat", "dog", "rat"], pattern = "c_t", incorrect_guesses = ["o", "g"]
// Output: 1
// Explanation: Only "cat" matches the pattern and doesn't contain any incorrect guesses.

// Example 2:
// Input: valid_words = ["cat", "dog", "rat"], pattern = "c_t", incorrect_guesses = ["a"]
// Output: 0
// Explanation: While "cat" matches the pattern, it contains 'a' which is known to be incorrect.

// Example 3:
// Input: valid_words = [], pattern = "c_t", incorrect_guesses = ["a"]
// Output: 0
// Explanation: With no valid words, no matches are possible.
// ```

// Constraints:

// - The length of `valid_words` is at most 10^4
// - Each word in `valid_words` has length at most 100
// - All characters in `words` and `pattern` are lowercase English letters
// - The `pattern` contains only letters and underscores
// - `incorrect_guesses` contains only letters

function hangmanMatch(validWords, pattern, incorrectGuesses) {
  let matchingWords = 0;
  const incGuessSet = new Set(incorrectGuesses);
  for (let word of validWords) {
    if (word.length == pattern.length) {
      let i = 0;
      while (i < word.length && i < pattern.length) {
        if (word[i] !== pattern[i]) {
          if (pattern[i] !== '_' || incGuessSet.has(word[i])) {
            break;
          }
        }
        i++;
      }
      if (i == word.length && i == pattern.length) matchingWords++;
    }
  }
  return matchingWords;
}

/* 
Complexity:
Time: O(N*M) where N is the number of valid words, and M is the number of letters in the pattern.
We process each of the N valid words once, and for each valid word we inspect, worst case, the M number of letters in the pattern. => O(N*M).
Space: O(1).
We have two constant-space integer variables, the loop variable i and the result variable matchingWords. => O(1).
*/

let validWords1 = ['cat', 'dog', 'rat'];
let pattern1 = 'c_t';
let incorrectGuesses1 = ['o', 'g'];
console.log(hangmanMatch(validWords1, pattern1, incorrectGuesses1));

let validWords2 = ['cat', 'dog', 'rat'];
let pattern2 = 'c_t';
let incorrectGuesses2 = ['a'];
console.log(hangmanMatch(validWords2, pattern2, incorrectGuesses2));

let validWords3 = [];
let pattern3 = 'c_t';
let incorrectGuesses3 = ['a'];
console.log(hangmanMatch(validWords3, pattern3, incorrectGuesses3));

let validWords4 = ['crane', 'brake', 'brain', 'trace', 'place', 'draft', 'drake', 'grape', 'grate'];
let pattern4 = '_ra_e';
let incorrectGuesses4 = ['t', 'd'];
console.log(hangmanMatch(validWords4, pattern4, incorrectGuesses4));

let validWords5 = ['crane', 'brake', 'brain', 'trace', 'place', 'draft', 'drake', 'grape', 'grate'];
let pattern5 = '______';
let incorrectGuesses5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(hangmanMatch(validWords5, pattern5, incorrectGuesses5));

let validWords6 = ['cranes', 'braked', 'brainteaser', 'tracers', 'placemats', 'drafting', 'drakes', 'grapes', 'graters'];
let pattern6 = '_ra_e';
let incorrectGuesses6 = ['t', 'd'];
console.log(hangmanMatch(validWords6, pattern6, incorrectGuesses6));

let validWords7 = ['crane', 'brake', 'brain', 'trace', 'place', 'draft', 'drake', 'grape', 'grate'];
let pattern7 = '_ra_e';
let incorrectGuesses7 = [];
console.log(hangmanMatch(validWords7, pattern7, incorrectGuesses7));

