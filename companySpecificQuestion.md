# LeetCode Company Specific questions () {...}

## Table of Contents

1. [Dream11](#Dream11)
1. [Nvidia](#nvidia)

## Dream11

**[1.1] Final Prices With a Special Discount in a Shop [link](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/)**

```javascript
// time complexity O(N^2) and space complexity O(1)
var finalPrices = function (prices) {
  let index = 0;
  while (index < prices.length) {
    if (prices[index + 1] !== undefined && prices[index + 1] <= prices[index]) {
      prices[index] = prices[index] - prices[index + 1];
    } else {
      let otherIndex = index;
      while (otherIndex < prices.length) {
        if (
          prices[otherIndex + 1] !== undefined &&
          prices[otherIndex + 1] <= prices[index]
        ) {
          prices[index] = prices[index] - prices[otherIndex + 1];
          break;
        } else {
          otherIndex++;
        }
      }
    }
    index++;
  }
  return prices;
};
```

**[1.2] Last Stone Weight [link](https://leetcode.com/problems/last-stone-weight/)**

```javascript
// time complexity O(n log n) and space complexity O(1)
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    const last = stones.pop();
    const secondLast = stones.pop();
    if (last - secondLast) {
      stones.push(last - secondLast);
    }
  }
  return stones;
};
```

**[1.3] Convert Binary Number in a Linked List to Integer [link](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)**

```javascript
// time complexity O(n) and space complexity O(n)
var getDecimalValue = function (head) {
  let binaryStr = "";
  while (head) {
    binaryStr += head.val;
    head = head.next;
  }
  return parseInt(binaryStr, 2);
};
```

## Nvidia

**[2.1] Count Binary Substrings [link](https://leetcode.com/problems/count-binary-substrings/)**

```javascript
// time complexity O(n) and space complexity O(n)
var countBinarySubstrings = function (s) {
  let arr = [];
  let ans = 0;

  let numberOfZero = 0;
  let numberOfOne = 0;

  // calculate continues no of zero and continues no of one's add into arr
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      if (numberOfOne) {
        arr.push(numberOfOne);
        numberOfOne = 0;
      }
      numberOfZero += 1;
    } else {
      if (numberOfZero) {
        arr.push(numberOfZero);
        numberOfZero = 0;
      }
      numberOfOne += 1;
    }
  }

  // push any last number of zero's or one's in arr
  if (numberOfOne) {
    arr.push(numberOfOne);
  } else if (numberOfZero) {
    arr.push(numberOfZero);
  }

  // example "00111"  our array will look like [2,3] 2 -> zero and 3 ones
  // so maximum no of subArray can be formed is 0011 and 01 that is 2
  // so that's why taking min of both value
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const next = arr[i + 1] ? arr[i + 1] : 0;
    ans += Math.min(current, next);
  }

  return ans;
};
```
