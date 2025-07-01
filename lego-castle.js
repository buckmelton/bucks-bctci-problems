// # Lego Castle

// You're building an `n`-story 2D Lego castle following these instructions:
// - A 1-story castle is just a `1x1` block.
// - An `n`-story castle is made with two `(n-1)`-story castles, side by side, one unit apart, with a row of blocks above them connecting them.

// Given `n > 0`, return the number of `1x1` blocks in an `n`-story castle.

// ```
// Example 1: n = 1
// Output: 1

// Example 2: n = 2
// Output: 5

// Example 3: n = 3
// Output: 17

// Example 4: n = 4
// Output: 49

// Example 5: n = 5
// Output: 129
// ```

// Constraints:
// - 1 ≤ n ≤ 1000

function legoCastle(n) {
  let memo = { };
  let nMinusOne = undefined;
  if (n == 1) {
    return 1;
  } else {
    if (memo[n]) {
      nMinusOne = memo[n];
    } else {
      nMinusOne = legoCastle(n-1);
      memo[n - 1] = nMinusOne;
    }
  }

  return 2 * nMinusOne + (2 ** n) - 1;;
}

/*
Complexity:
Time: O(N).
We memoize all values of N, so all branches but one are pruned.
Space: O(N).
There are at most N calls on the call stack.
*/

 console.log(legoCastle(1));
 console.log(legoCastle(2));
 console.log(legoCastle(3));
 console.log(legoCastle(4));
 console.log(legoCastle(5));


