// # Nested Circles

// You are given a non-empty array of circles, `circles`, where each circle is specified by its center coordinates `(x, y)` and its radius `r`. Your task is to determine whether the circles are _nested_. For the circles to be considered nested, one of the following conditions must be met:

// 1. There is a single circle.
// 2. One circle completely surrounds all the others (without touching boundaries), and the other circles are themselves _nested_ (this is a recursive definition).

// ```
// Example 1: circles = [
//     ((4, 4), 5),  # Circle with center (4, 4) and radius 5
//     ((8, 4), 2)   # Circle with center (8, 4) and radius 2
// ]
// Output: false. Neither circle is surrounded by the other.

// Example 2: circles = [
//     ((5, 3), 3),
//     ((5, 3), 2),
//     ((4, 4), 5)
// ]
// Output: true. The third circle contains all the first and second circles, and the first circle contains the second circle.

// Example 3: circles = [((5, 3), 3)]
// Output: true. A single circle is considered nested.
// ```

// Constraints:

// - The length of circles is at most 10^4
// - All coordinates and radii are integers between -10^4 and 10^4

/*
Design:
The only way the circles are nested is if each is smaller in area than the other, AND the top, right, bottom, and left coordinates are below, to the left of, above, and to the right of the enclosing circle, respectively.
First create an array of circles, sorted by area, then go through each circle and make sure a) it's smaller than the previous circle and b) its top right bottom left coords are inside the previous circles.
*/

function nestedCircles(circles) {
  if (circles.length == 1) return true;

  let allUnique = true;

  function compareAreas(a, b) {
    if (a[1] < b[1]) return 1;
    if (b[1] < a[1]) return -1;
    allUnique = false;
    return 0;
  }

  function inside(a, b) {
    let at = a[0][1] + a[1];
    let ar = a[0][0] + a[1];
    let ab = a[0][1] - a[1];
    let al = a[0][0] - a[1];
    let bt = b[0][1] + b[1];
    let br = b[0][0] + b[1];
    let bb = b[0][1] - b[1];
    let bl = b[0][0] - b[1];

    return(
      at < bt &&
      ar < br &&
      ab > bb &&
      al > bl
    );
  }

  circles.sort(compareAreas);
  if (!allUnique) return false;
  for (let i = 1; i < circles.length; i++) {
    if (!inside(circles[i], circles[i-1])) {
      return false;
    }
  }
  return true;
}

/*
Complexity:

Time: O(N log N).
The sort, under the hood, likely takes O(N log N) time.  Then there is one pass through the sorted circles, comparing each circle to the one before it in the array to see if it lay inside => O(N).  O(N log N) + O(N) => O(N log N).

Space: O(1).
As far as we know, the sort, under the hood, in done in-place and requires no extra space.  We declare and use several integer and one boolean tracking variable, all constant time => O(1).

*/

let circles1 = [
  [[4, 4], 5],
  [[8, 4], 2]
];

console.log(nestedCircles(circles1));

let circles2 = [
    [[5, 3], 3],
    [[5, 3], 2],
    [[4, 4], 5]
];

console.log(nestedCircles(circles2));

let circles3 = [[[5, 3], 3]];

console.log(nestedCircles(circles3));
