# # 2-Array 2-Sum

# You are given two non-empty arrays of integers, `sorted_arr` and `unsorted_arr`. The first one is sorted, but the second is not. The goal is to find one element from each array with sum `0`. If you can find them, return an array with their indices, starting with the element in `sorted_arr`. Otherwise, return `[-1, -1]`. Use `O(1)` _extra space_ and do not modify the input.

# Example 1:
# sorted_arr = [-5, -4, -1, 4, 6, 6, 7]
# unsorted_arr = [-3, 7, 18, 4, 6]
# Output: [1, 3]
# Explanation: We can use -4 from the sorted array and 4 from the unsorted array.

# Example 2:
# sorted_arr = [1, 2, 3]
# unsorted_arr = [1, 2, 3]
# Output: [-1, -1]
# Explanation: No pair of elements sums to 0.

# Example 3:
# sorted_arr = [-2, 0, 1, 2]
# unsorted_arr = [0, 2, -2, 4]
# Output: [0, 1]
# Explanation: We can use -2 from the sorted array and 2 from the unsorted array.

# Constraints:

# - `1 ≤ sorted_arr.length, unsorted_arr.length ≤ 10^6`
# - -`10^9 ≤ sorted_arr[i], unsorted_arr[i] ≤ 10^9`
# - `sorted_arr` is sorted in ascending order
# - The arrays have no duplicates
# - Use `O(1)` _extra space_ and do not modify the input

=begin
Approach:
For each element of the unsorted array, perform a binary search on the sorted array to see if a 0 complement exists.
If it does, return it.  If it doesn't, return [-1, -1].

The time complexity: we go through the M elements of the unsorted array.
For each of the M elements, we do a log N search on the sorted array with length N.  So time complexity is O(M log N).
The space complexity: we only have an index pointing into the unsorted array,
3 indices for the binary search pointing into the sorted array, and the 2-element result array.
All of these are constant size, so space complexity is O(1), as requested.
=end

def find_complement(arr, target)
  # define is_before(val)
  # we don't need a full is_before here because we have a simple int array

  # set l to first index, r to last index
  l = 0
  r = arr.length - 1
  # edge cases: no range, l after all vals, r before all vals
  if l == r
    return l if arr[l] == target
    return nil
  end

  # while l and r aren't next to each other, keep moving one of them
  # to the middle
  while r - l > 1 do
    mid = (r + l) / 2
    if target < arr[mid]
      r = mid
    else
      l = mid
    end
  end

  # Either l or r is at the target, or the target isn't found
  return l if arr[l] == target
  return r if arr[r] == target
  return nil
end

def two_array_two_sum(s_arr, u_arr)
  u_arr.each_with_index do |elt, i|
    comp_idx = find_complement(s_arr, elt * -1)
    return [comp_idx, i] if comp_idx != nil
  end
  return [-1, -1]
end

# Example 1:
sorted_arr = [-5, -4, -1, 4, 6, 6, 7]
unsorted_arr = [-3, 7, 18, 4, 6]
p two_array_two_sum(sorted_arr, unsorted_arr)
# Output: [1, 3]

# Example 2:
sorted_arr = [1, 2, 3]
unsorted_arr = [1, 2, 3]
p two_array_two_sum(sorted_arr, unsorted_arr)
# Output: [-1, -1]

# Example 3:
sorted_arr = [-2, 0, 1, 2]
unsorted_arr = [0, 2, -2, 4]
p two_array_two_sum(sorted_arr, unsorted_arr)
# Output: [0, 1]

