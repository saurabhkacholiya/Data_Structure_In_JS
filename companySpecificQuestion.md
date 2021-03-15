# LeetCode Company Specific questions () {...}

## Table of Contents

1. [Dream11](#Dream11)

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
