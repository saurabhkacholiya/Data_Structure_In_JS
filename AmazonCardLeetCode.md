# LeetCode Amazon Card Question's [click here](https://leetcode.com/explore/interview/card/amazon) () {...}

## Table of Contents

1. [Array](#array)
1. [DynamicProblem](#dynamicProblem)
1. [Recursion](#recursion)
1. [TreesAndGraph](#treesAndGraph)

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

**[1.3] String to Integer (atoi) [link](https://leetcode.com/problems/string-to-integer-atoi/)**

```javascript
// time complexity O(N) and space complexity O(n)
var myAtoi = function (s) {
  if (!s.length) return 0;

  let newStr = "";
  let addMinusSymbol = false;
  let numberStr = "";

  if (s[0] === " ") {
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== " ") {
        newStr = s.substr(i);
        break;
      }
    }
  } else {
    newStr = s;
  }

  if (newStr[0] == "-") {
    addMinusSymbol = true;
    newStr = newStr.substr(1);
  } else if (newStr[0] == "+") {
    addMinusSymbol = false;
    newStr = newStr.substr(1);
  }

  if (newStr.charCodeAt(0) >= 48 && newStr.charCodeAt(0) <= 57) {
    for (let i = 0; i < newStr.length; i++) {
      if (newStr.charCodeAt(i) >= 48 && newStr.charCodeAt(i) <= 57) {
        numberStr += newStr[i];
      } else {
        break;
      }
    }
  } else {
    return 0;
  }

  if (addMinusSymbol) {
    numberStr = "-" + numberStr;
    let minValue = Math.pow(-2, 31);
    return Number(numberStr) < minValue ? minValue : Number(numberStr);
  } else {
    let maxValue = Math.pow(2, 31) - 1;
    return Number(numberStr) > maxValue ? maxValue : Number(numberStr);
  }
};
```

**[1.4] Transpose Matrix [link](https://leetcode.com/problems/transpose-matrix/)**

```javascript
var transpose = function (matrix) {
  const row = matrix.length;
  const columns = matrix[0].length;

  const transPoseMatrix = new Array(columns).fill([]).map((_) => []);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < columns; j++) {
      transPoseMatrix[j][i] = matrix[i][j];
    }
  }

  return transPoseMatrix;
};
```

**[1.5] Rotate Image [link](https://leetcode.com/problems/rotate-image/)**

```javascript
var rotate = function (matrix) {
  const row = matrix.length;
  const column = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = i; j < column; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let rowIdx = 0; rowIdx < row; rowIdx++) {
    let i = 0;
    let j = matrix[rowIdx].length - 1;

    while (i < j) {
      const temp = matrix[rowIdx][i];
      matrix[rowIdx][i] = matrix[rowIdx][j];
      matrix[rowIdx][j] = temp;
      i += 1;
      j -= 1;
    }
  }

  return matrix;
};
```

**[1.6] Container With Most Water [link](https://leetcode.com/problems/container-with-most-water/)**

```javascript
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let maxArea = Math.min(height[left], height[right]);
    max = Math.max(max, maxArea * (right - left));
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return max;
};
```

**[1.7] Trapping Rain Water [link](https://leetcode.com/problems/trapping-rain-water/)**

```javascript
var trap = function (height) {
  let max = 0;

  for (let i = 1; i < height.length; i++) {
    let leftMax = 0;
    let rightMax = 0;

    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }

    for (let k = i; k < height.length; k++) {
      rightMax = Math.max(rightMax, height[k]);
    }

    const water = Math.min(leftMax, rightMax) - height[i];
    if (water > 0) {
      max += water;
    }
  }

  return max;
};

// optimized Solution o(n) with o(1)

var trap = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  let rightMax = 0;
  let leftMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        max += leftMax - height[left];
      }
      left += 1;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        max += rightMax - height[right];
      }
      right -= 1;
    }
  }

  return max;
};
```

**[1.8] Group Anagrams [link](https://leetcode.com/problems/group-anagrams/)**

```javascript
var groupAnagrams = function (strArr) {
  let anagramArr = [];
  let map = {};

  for (let i = 0; i < strArr.length; i++) {
    let sortedStr = strArr[i].split("").sort().join("");

    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }

    map[sortedStr].push(strArr[i]);
  }

  for (let item in map) {
    anagramArr.push(map[item]);
  }

  return anagramArr;
};
```

**[1.9] Missing Number [link](https://leetcode.com/problems/missing-number/)**

```javascript
var missingNumber = function (nums) {
  let totalLen = nums.length;

  let totalVal = Math.floor(((totalLen + 1) * totalLen) / 2);

  for (let i = 0; i < nums.length; i++) {
    totalVal -= nums[i];
  }

  return totalVal;
};
```

**[1.1.0] First Unique Character in a String [link](https://leetcode.com/problems/first-unique-character-in-a-string/)**

```javascript
var firstUniqChar = function (s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] = map[s[i]] + 1;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == 1) {
      return i;
    }
  }

  return -1;
};
```

**[1.1.0] Subarray Sum Equals K [link](https://leetcode.com/problems/subarray-sum-equals-k/)**

```javascript
// o(n^3) time and space :- o(1)
var subArraySum = function (nums, k) {
  let count = 0;

  for (let start = 0; start < nums.length; start++) {
    for (let end = start + 1; end < nums.length; end++) {
      let sum = 0;

      for (let i = start; i <= end; i++) {
        sum += nums[i];
      }

      if (sum === k) {
        count += 1;
      }
    }
  }
  return count;
};

// optimized using map
// time o(n) and space o(1)
```

## DynamicProblem

**[2.1] Coin Change (atoi) [link](https://leetcode.com/problems/string-to-integer-atoi/)**

```javascript
// time complexity O(i * j) and space complexity O(n)
var coinChange = function (coins, amount) {
  // create a dp array that will store value from 0 to amount that why amount + 1 as array are 0 based
  // dp array index is the coin value example 0 index is 0 coin value , 1 index is 1 coin value
  // and dp array value on the particular index dp[index] is the minimum number of coins used to get the amount that is equal to index of dp array

  // j is dp array index
  // i is coins array value

  //   j-> 0 1 2 3 4 5
  // i
  // 1     0 1 2 3 4 5 -> dp array after 1st iteration where coins value is coins[i] = 1
  // 2     0 1 1 2 2 3 -> dp array after 2st iteration where coins value is coins[i] = 2
  // 3     0 1 1 1 2 2 -> dp array at final iteration where coins value is coins[i] = 3

  const dp = new Array(amount + 1).fill(amount + 1);

  // as you can't have any combination of coins to make value 0 so make it 0.
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < dp.length; j++) {
      if (coins[i] <= j) {
        // dp[j - coins[i]] doing this to get precomputed value
        dp[j] = Math.min(dp[j], 1 + dp[j - coins[i]]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};
```

## Recursion

**[3.1] Letter Combinations of a Phone Number [link](https://leetcode.com/problems/string-to-integer-atoi/)**

```javascript
var letterCombinations = function (digits) {
  if (!digits || !digits.length) return [];
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const outputArr = [];

  const getPermutation = (index, str) => {
    if (index == digits.length) {
      outputArr.push(str);
    } else {
      for (const character of map[digits[index]]) {
        getPermutation(index + 1, str + character);
      }
    }
  };

  getPermutation(0, "");

  return outputArr;
};
```

**[3.2] Generate Parentheses [link](https://leetcode.com/problems/generate-parentheses/)**

```javascript
// un-optimized answer
var generateParenthesis = function (n) {
  const output = [];
  const strArr = [];
  for (let i = 0; i < n; i++) {
    strArr.push("(");
    strArr.push(")");
  }
  getRecursion(strArr, output, 0, {});
  return output;
};

function getRecursion(str, output, i, map) {
  if (i === str.length - 1 && isValidParenthesis(str)) {
    const newCombination = str.join("");

    if (!map[newCombination]) {
      output.push(newCombination);

      map[newCombination] = true;
      return;
    }
  } else {
    for (let j = i; j < str.length; j++) {
      swap(i, j, str);
      getRecursion(str, output, i + 1, map);
      swap(i, j, str);
    }
  }
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function isValidParenthesis(str) {
  if (str[0] === ")") return false;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      arr.push("(");
    } else {
      if (arr[arr.length - 1] === "(") {
        arr.pop();
      } else {
        return false;
      }
    }
  }

  return arr.length === 0;
}

// optimized answer
var generateParenthesis = function (n) {
  const outputArr = [];
  helper("", 0, 0, n, outputArr);
  return outputArr;
};

function helper(str, open, close, n, outputArr) {
  if (str.length === 2 * n) {
    outputArr.push(str);
    return;
  }

  if (open < n) {
    const newStr = str + "(";
    helper(newStr, open + 1, close, n, outputArr);
  }

  if (close < open) {
    const newStr = str + ")";
    helper(newStr, open, close + 1, n, outputArr);
  }
}
```

**[3.3] Word Search [link](https://leetcode.com/problems/word-search/)**

```javascript
var exist = function (board, word) {
  let count = 0;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === word[0] && dfs(board, row, col, count, word)) {
        return true;
      }
    }
  }

  return false;
};

function dfs(board, row, col, count, word) {
  if (word.length === count) {
    return true;
  }

  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[0].length ||
    board[row][col] !== word[count] ||
    board[row][col] === "x"
  ) {
    return false;
  }

  const temp = board[row][col];
  board[row][col] = "x";

  let bol =
    dfs(board, row + 1, col, count + 1, word) ||
    dfs(board, row - 1, col, count + 1, word) ||
    dfs(board, row, col + 1, count + 1, word) ||
    dfs(board, row, col - 1, count + 1, word);

  board[row][col] = temp;

  return bol;
}
```

## TreesAndGraph

**[4.1] Symmetric Tree [link](https://leetcode.com/problems/symmetric-tree/)**

```javascript
var isSymmetric = function (root) {
  const queue = [root, root];

  while (queue.length) {
    const t1 = queue.pop();
    const t2 = queue.pop();

    if (t1 == null && t2 == null) continue;
    if (t1 == null || t2 == null) return false;
    if (t1.val !== t2.val) return false;
    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }

  return true;
};
```

**[4.2] Binary Tree Level Order Traversal [link](https://leetcode.com/problems/binary-tree-level-order-traversal/)**

```javascript
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const output = [];

  while (queue.length) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      level.push(node.val);
    }

    output.push(level);
  }

  return output;
};
```

**[4.3] Binary Tree Zigzag Level Order Traversal [link](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)**

```javascript
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];

  let leftFirst = true; // because we are adding root first
  let output = [];
  while (queue.length) {
    let size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      level.push(node.val);
    }

    output.push(leftFirst ? level : level.reverse());
    leftFirst = !leftFirst;
  }

  return output;
};
```

**[4.4] Number of Islands [link](https://leetcode.com/problems/number-of-islands/)**

```javascript
var numIslands = function (grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j);
        count += 1;
      }
    }
  }

  return count;
};

function dfs(grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  ) {
    return;
  }

  grid[i][j] = "0";

  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
}
```

**[4.5] Lowest Common Ancestor of a Binary Tree [link](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)**

```javascript
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right;
  if (!right) return left;
  return root;
};
```

**[4.6] Binary Tree Maximum Path Sum [link](https://leetcode.com/problems/binary-tree-maximum-path-sum/)**

```javascript
var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  dfs(root);

  return maxSum;

  function dfs(node) {
    if (!node) return 0;
    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));
    let total = node.val + left + right;
    maxSum = Math.max(maxSum, total); // get the current Max
    // take the current node and what ever maximum child value
    // and pass that value up the recursion and check if we have new max sum with
    // current node parent
    return node.val + Math.max(left, right);
  }
};
```
