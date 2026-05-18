// # Unique Movie Titles

// You work at a streaming video service called StreamFlix. You need to clean up the database of movie titles to ensure each movie is uniquely listed.

// Given a list of movie titles, `titles`, that our users have requested, return the unique titles by ignoring any words after a colon (`':'`) and lowercasing them.

// Example 1:
// Input: titles = ["trOn", "Star Wars-A New Hope", "Tron", "Tron: Remastered", "The Matrix", "tron", "The Matrix: Director's Cut"]
// Output: ["star wars-a new hope", "tron", "the matrix"]
// Explanation: After lowercasing and removing text after colons, we have three unique titles.

// Example 2:
// Input: titles = []
// Output: []
// Explanation: An empty input should return an empty list.

// Example 3:
// Input: titles = ["A", "B", "C"]
// Output: ["a", "b", "c"]
// Explanation: When there are no duplicates, we just lowercase each title.

// Constraints:

// - The length of titles is at most `10^5`
// - Each title contains only alphanumeric characters, spaces, hyphens, and colons.
// - Each title has length at most `100`.

function uniqTitles(titles) {
  const titleSet = new Set();
  for (let title of titles) {
    let uniqTitle = title.replace(/:.*$/, '').toLowerCase();
    titleSet.add(uniqTitle);
  }
  return [...titleSet];
}
