# LeetCode Top InterviewQuestions [click here](https://leetcode.com/explore/interview/card/top-interview-questions-easy/) () {...}

## Table of Contents

1. [Array](#array)
1. [String](#string)

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

**[1.3] Rotate Array [link](https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/)**

```javascript
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let value = nums.pop();
    nums.unshift(value);
  }

  return nums;
};
```

## String

**[2.1] Reverse String [link](https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/879/)**

```javascript
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    swap(start, end, s);
    start += 1;
    end -= 1;
  }
  console.log(s);
};

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```

**[2.2] Valid Palindrome [link](https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/883/)**

```javascript
var isPalindrome = function (str) {
  let newStr = getValidStr(str);

  let start = 0;
  let end = newStr.length - 1;

  while (start <= end) {
    if (newStr[start] !== newStr[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
};

function getValidStr(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let value = str.charCodeAt(i);

    // only pass alpha numeric value
    if (
      (value >= 65 && value <= 90) ||
      (value >= 97 && value <= 122) ||
      (value >= 48 && value <= 57)
    ) {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}
```
