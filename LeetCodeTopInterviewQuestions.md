# LeetCode Top InterviewQuestions [click here](https://leetcode.com/explore/interview/card/top-interview-questions-easy/) () {...}

## Table of Contents

1. [Array](#array)
1. [String](#string)
1. [Sorting](#sorting)
1. [Dynamic_Problems](#Dynamic_Problems)
1. [LinkedList](#linkedList)
1. [Tree](#tree)

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

## Sorting

**[3.1] Merge Sorted Array [link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/)**

```javascript
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let p = m + n - 1; p >= 0; p--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1 -= 1;
    } else {
      nums1[p] = nums2[p2];
      p2 -= 1;
    }
  }
};
```

**[3.2] First Bad Version [link](https://leetcode.com/problems/first-bad-version/submissions/)**

```javascript
var solution = function (isBadVersion) {
  return function (n) {
    let start = 1;
    let end = n;

    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return start;
  };
};
```

## Dynamic_Problems

**[4.1] Climbing Stairs [link](https://leetcode.com/problems/climbing-stairs/)**

```javascript
var climbStairs = function (n) {
  const memo = {};
  const count = getClimbCount(0, n, memo);
  return count;
};

function getClimbCount(i, n, memo) {
  if (i == n) {
    return 1;
  }
  if (i > n) {
    return 0;
  }

  if (memo[i]) {
    return memo[i];
  }

  memo[i] = getClimbCount(i + 1, n, memo) + getClimbCount(i + 2, n, memo);

  return memo[i];
}
```

**[4.2] Best Time to Buy and Sell Stock [link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)**

```javascript
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minStock = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (minStock < prices[i]) {
      maxProfit = Math.max(maxProfit, prices[i] - minStock);
    } else {
      minStock = prices[i];
    }
  }

  return maxProfit;
};
```

## LinkedList

**[5.1] Delete Node in a Linked List [link](https://leetcode.com/problems/delete-node-in-a-linked-list/)**

```javascript
var deleteNode = function (node) {
  const temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
  temp.next = null;
};
```

## Tree

**[6.1] Maximum Depth of Binary Tree [link](https://leetcode.com/problems/maximum-depth-of-binary-tree/)**

```javascript
function maxDepth(root) {
  if (root === null) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}
```

**[6.2] Validate Binary Search Tree [link](https://leetcode.com/problems/validate-binary-search-tree/)**

```javascript
var isValidBST = function (root) {
  return validateRoot(root, null, null);
};

function validateRoot(root, low, high) {
  if (root == null) {
    return true;
  }

  if (
    (low !== null && root.val <= low) ||
    (high !== null && root.val >= high)
  ) {
    return false;
  }

  return (
    validateRoot(root.right, root.val, high) &&
    validateRoot(root.left, low, root.val)
  );
}
```
