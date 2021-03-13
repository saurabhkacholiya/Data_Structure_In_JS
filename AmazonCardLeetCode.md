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
