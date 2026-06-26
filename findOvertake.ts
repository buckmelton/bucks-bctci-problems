/*
Race Overtaking
You are given two arrays of positive integers, p1 and p2, representing players in a racing game. The two arrays are sorted, non-empty, and have the same length, n. The i-th element of each array corresponds to where that player was on the track at the i-th second of the race. We know that:

Player 1 started ahead (p1[0] > p2[0])
Player 2 overtook player 1 once.
Player 2 remained ahead until the end (p1[n - 1] < p2[n - 1]).
Assume the arrays have no duplicates, and that p1[i] != p2[i] for any index.

Return the index at which player 2 overtook player 1.

Example 1: p1 = [2, 4, 6, 8, 10], p2 = [1, 3, 5, 9, 11] Output: 3. At index 3, p2 (9) becomes greater than p1 (8).

Example 2: p1 = [2, 3, 4, 5, 6], p2 = [1, 2, 3, 6, 7] Output: 3. At index 3, p2 (6) becomes greater than p1 (5).

Example 3: p1 = [3, 4, 5], p2 = [2, 5, 6] Output: 1. At index 1, p2 (5) becomes greater than p1 (4).

Constraints:

2 ≤ p1.length = p2.length ≤ 10^6
0 ≤ p1[i], p2[i] ≤ 10^9
p1 and p2 are strictly increasing
There is exactly one point where p2 overtakes p1

*/

/*
Approach:
Find the transition point in arrays where p1[i] goes from > p2[i] to < p2[i]. Since
the arrays are monotonically increasing, that means they are sorted and we can do
this with binary search.
*/
