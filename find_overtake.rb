# # Race Overtaking

# You are given two arrays of positive integers, `p1` and `p2`, representing players in a racing game. The two arrays are sorted, non-empty, and have the same length, `n`. The `i`-th element of each array corresponds to where that player was on the track at the `i`-th second of the race. We know that:

# 1. Player 1 started ahead (`p1[0] > p2[0]`)
# 2. Player 2 overtook player 1 _once_.
# 3. Player 2 remained ahead until the end (`p1[n - 1] < p2[n - 1]`).

# Assume the arrays have no duplicates, and that `p1[i] != p2[i]` for any index.

# Return the index at which player 2 overtook player 1.

# Example 1: p1 = [2, 4, 6, 8, 10], p2 = [1, 3, 5, 9, 11]
# Output: 3. At index 3, p2 (9) becomes greater than p1 (8).

# Example 2: p1 = [2, 3, 4, 5, 6], p2 = [1, 2, 3, 6, 7]
# Output: 3. At index 3, p2 (6) becomes greater than p1 (5).

# Example 3: p1 = [3, 4, 5], p2 = [2, 5, 6]
# Output: 1. At index 1, p2 (5) becomes greater than p1 (4).

# Constraints:

# - `2 ≤ p1.length = p2.length ≤ 10^6`
# - `0 ≤ p1[i], p2[i] ≤ 10^9`
# - `p1` and `p2` are strictly increasing
# - There is exactly one point where `p2` overtakes `p1`

=begin
Approach:
Find the transition point where p1[i] goes from being > p2[i] (leading) to being
< p2[i] (trailing).  Use binary search to do this.

I'll use a generalized binary search recipe based on a transition-point invariant.
Instead of searching for a specific value, I define a boolean predicate, is_before(),
to split the search space into a continuous sequence of True values followed by
False values. By keeping the search range strictly bounded between a known True
pointer and a known False pointer, I completely eliminate off-by-one errors and
infinite loops, allowing me to solve any binary search variation with the exact same
layout.

Complexity:
Time complexity is O(log N), where N is the size of the arrays, since we are simply
doing a binary search, which is O(log N), and no additional processing.
Space complexity is O(1) since the only extra space we're using is for array index
pointers for the binary search for left, right and middle

=end

def find_overtake(p1, p2)
  # define predicate that tests whether cur val is before or after transition point
  # we're before the transition point if p1 is still leading p2
  is_before = ->(second) { p1[second] > p2[second] }

  # set l and r to beginning and end of range
  l, r = 0, p1.length - 1

  # handle edge cases: no range, l is to the right of transition point,
  # r is to the left of transition point
  # From the definition and constraints we know none of these edge cases hold:
  # array.length >= 2 guarantees a range, and we're told that the transition
  # point exists in the range.

  # search for transition point until r and l are next to each other
  while r - l > 1 do
    # ruby integer division automatically applies 'floor'
    mid = (r + l) / 2
    if is_before.call(mid)
      l = mid
    else
      r = mid
    end
  end

  # l and r are next to each other, we've found the transition point,
  # r points to where p2 overtakes p1
  return r
end
