# # String Matching

# Implement an `index_of(s, t)` method, which returns the first index where string `t` appears in string `s`, or -1 if `s` does not contain `t`.

# Example 1: s = "hello world", t = "world"
# Output: 6

# Example 2: s = "needle in a haystack", t = "needle"
# Output: 0

# Example 3: s = "needle in a haystack", t = "not"
# Output: -1

# Constraints:

# - The input strings can contain any valid ASCII character
# - The length of `s` is at most `10^5`
# - The length of `t` is at most `10^5`
# - `t` can be empty, in which case return `0`
# - `s` can be empty, in which case return `-1` if `t` is non-empty, `0` if `t` is empty

def find_index(s, t)
  return 0 if t.length == 0
  return -1 if s.length == 0
  for si in 0..s.length - t.length do
    if s[si] == t[0]
      ti = 1
      while ti < t.length && t[ti] == s[si+ti]
        ti += 1
      end
      if ti == t.length
        return si
      end
    end
  end
  return -1
end
