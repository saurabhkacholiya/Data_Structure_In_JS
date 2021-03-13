# LeetCode Amazon Card Question's [click here](https://leetcode.com/explore/interview/card/amazon) () {...}

## Table of Contents

1. [Array](#array)

## Array

**[1.1] Two Sum [link](https://leetcode.com/problems/two-sum/)**

```javascript
// time complexity O(N) and space complexity O(N)
var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i];
    if (map[nums[i]] >= 0 && nums[i] + value == target) {
      return [map[nums[i]], i];
    } else {
      map[value] = i;
    }
  }
};
```

**[1.2] Longest Substring Without Repeating Characters [link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)**

```javascript
// time complexity O(N) and space complexity O(1)
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;
  let ans = 0;
  let map = {};
  /*
    _ The goal is to anchor i and find the longest range of [i, j].
    _ When s[i, j] has a duplicate letter, we remove s[i] from the
    _ set and move i to the next position so we don't include
    _ s[prev i] in the next range calculation.
  */
  while (j < s.length) {
    if (!map[s[j]]) {
      map[s[j]] = true;
      ans = Math.max(ans, j - i + 1);
      j += 1;
    } else {
      map[s[i]] = false;
      i += 1;
    }
  }

  return ans;
};
```
