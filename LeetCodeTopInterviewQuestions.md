# LeetCode Top InterviewQuestions [click here](https://leetcode.com/explore/interview/card/top-interview-questions-easy/) () {...}

## Table of Contents

1. [Array](#array)

## Array

**[1.1] Remove Duplicates from Sorted Array [link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/)**

```javascript
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;

  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[count]) {
      count += 1;
      nums[count] = nums[i];
    }
  }

  return count + 1;
};
```

**[1.2] best-time-to-buy-and-sell-stock-ii [link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/)**

```javascript
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      // if true buy on previous day and sell on current day
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
};
```
