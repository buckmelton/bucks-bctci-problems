// # Water Refilling

// You have an empty container with a capacity of `a` gallons of water and another container with a capacity of `b` gallons. Return how many times you can pour the second container full of water into the first one without overflowing. Assume that `a > b`.

// **Constraint:** You are not allowed to use the division operation, but you can still divide by powers of two with the right-shift operator, `>>`. Recall that `x >> 1` is the same as `x // 2`.

// ```
// Example 1: a = 18, b = 5
// Output: 3. After pouring 5 gallons three times, the first container will be at 15, and 5 more gallons would make it overflow.

// Example 2: a = 10, b = 2
// Output: 5

// Example 3: a = 10, b = 3
// Output: 3
// ```

/* 
Design:
Frame this as a binary search problem.  Find the first
n such that n * b > a, where every n before does not overflow, and
every n after n inclusive, overflows.  The answer is then n-1.  We
know if a > b, then the smallest number of b's that could be poured
into a without overflow is 1.  To find the end of the range, use
exponential search to find the the first power of two > a.
*/

function refills(a, b) {
  function isBefore(n) {
    return n * b <= a;
  }

  let l = 1;
  let r = 2;
  while (r < a) {
    r *= 2;
  }

  let mid = undefined;
  while (l < r - 1) {
    mid = l + Math.trunc((r - l) / 2);
    if (isBefore(mid)) {
      l = mid;
    } else {
      r = mid;
    }
  }
  return l;
}

/*
Complexity:
Space: O(1).
We're only creating 3 integer tracking pointers => O(1).
Time: O(log n).
We're doing a binary search on the number of refills between 1 and
some number larger than the answer.  The number of binary searches
is log n => O(log n).
*/

console.log(refills(18, 5));
console.log(refills(10, 2));
console.log(refills(10, 3));
console.log(refills(123, 122));
console.log(refills(121, 11));
console.log(refills(1, 1));
