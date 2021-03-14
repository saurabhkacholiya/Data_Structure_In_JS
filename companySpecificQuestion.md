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
