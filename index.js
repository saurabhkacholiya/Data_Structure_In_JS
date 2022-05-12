// var logicAlbums = [
//   "Bobby Tarantino",
//   "The Incredible True Story",
//   "Supermarket",
//   "Under Pressure",
// ];

const { clear } = require("console");
const { delay } = require("q");

// let val = logicAlbums.reduce((acc, b) => {
//   return acc + " , " + b;
// }, "young Sinatra");

// console.log(val);

// Array.prototype.myReduce = function (callback, initialValue) {
//   let acc = initialValue === undefined ? undefined : initialValue;

//   for (let i = 0; i < this.length; i++) {
//     if (acc !== undefined) {
//       acc = callback.call(_, acc, this[i], i, this);
//     } else {
//       acc = this[i];
//     }
//   }

//   return acc;
// };

// let value = logicAlbums.reduce((a, b) => a + "--" + b, "saurabh");

// console.log(value);

// let obj = {
//   Company: "GeeksforGeeks",
//   Address: "Noida",
//   contact: +91 - 999999999,
//   mentor: {
//     HTML: "GFG",
//     CSS: "GFG",
//     JavaScript: "GFG",
//     person: {
//       name: "saurabh",
//       sex: {
//         typeof: "male",
//       },
//     },
//   },
// };

// console.log(JSON.stringify(flat(obj), null, 4));

// function flat(obj) {
//   return wrapper(obj);
// }

// function wrapper(obj, output = {}, oldKey = "") {
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       oldKey = oldKey ? oldKey + "." + key : key;
//       output = wrapper(obj[key], output, oldKey);
//     } else {
//       const val = oldKey ? oldKey + "." + key : key;
//       output[val] = obj[key];
//     }
//   }
//   return output;
// }

// Create a timer class in js with start, pause, resume and stop
// use callback and use effect, debug a react component in infinite loop
// flatten an array
// Try to write unite test cases
// Debouncing,
// throttling,
// how http page renders
// tricky promises questions.
// Sorting array of objects with two keys
// Implement method like lodash.get()

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// spiralTraverse(arr);

// function spiralTraverse(array) {
//   let startRow = 0;
//   let endRow = array.length - 1;
//   let startCol = 0;
//   let endCol = array[0].length - 1;
//   let arr = [];

//   while (startRow <= endRow && startCol <= endCol) {
//     for (let col = startCol; col <= endCol; col++) {
//       arr.push(array[startRow][col]);
//     }

//     for (let row = startRow + 1; row <= endRow; row++) {
//       arr.push(array[row][endCol]);
//     }

//     for (let col = endCol - 1; col >= startCol; col--) {
//       if (startRow === endRow) break;
//       arr.push(array[endRow][col]);
//     }

//     for (let row = endRow - 1; row > startRow; row--) {
//       if (startCol === endCol) break;
//       arr.push(array[row][startCol]);
//     }

//     startRow++;
//     endRow--;
//     startCol++;
//     endCol--;
//   }

//   console.log("------------");
//   console.log("arr is ", arr);
//   console.log("------------");
// }
// const arr = [20, -20, 5, 2, 3, 4];

// findLongestSubArrayLen(arr);

// function findLongestSubArrayLen(arr) {
//   let total = -Infinity;
//   let current = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     current += arr[i];
//     if (current > total) {
//       total = current;
//     }

//     if (current < 0) {
//       current = 0;
//     }
//   }

//   console.table(total);
// }

// let str = "clementisacap";

// findLongestSubArrayLen(str);

// function findLongestSubArrayLen(str) {
//   let pointerOne = 0;
//   let pointerTwo = 0;
//   let len = 0;
//   let map = {};
//   let op = "";

//   while (pointerTwo < str.length) {
//     if (!map[str[pointerTwo]]) {
//       map[str[pointerTwo]] = true;
//       const point = pointerTwo - pointerOne + 1;
//       if (len < point) {
//         op = str.slice(pointerOne, pointerTwo + 1);
//         len = point;
//       }
//       pointerTwo++;
//     } else {
//       map[str[pointerOne]] = false;
//       pointerOne++;
//     }
//   }
//   console.log("subString is", op);
// }

// let str = "saurabh";

// findLongestSubStr(str);

// function findLongestSubStr(str) {
//   let startIdx = 0;
//   let lastSeen = {};
//   let longest = [0, 1];

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (char in lastSeen) {
//       startIdx = Math.max(startIdx, lastSeen[char] + 1);
//     }

//     if (longest[1] - longest[0] < i + 1 - startIdx) {
//       longest = [startIdx, i + 1];
//     }

//     lastSeen[char] = i;
//   }

//   console.log(str.slice(longest[0], longest[1]));
// }

// const str = "axyxcabcdcba";

// palindromeSubStr(str);

// function palindromeSubStr(str) {
//   let longest = "";

//   for (let start = 0; start < str.length; start++) {
//     for (let end = start; end < str.length; end++) {
//       const subStr = str.slice(start, end + 1);
//       if (longest.length < subStr.length && isPalindrome(subStr)) {
//         longest = subStr;
//       }
//     }
//   }
//   console.table(longest);
// }

// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }

// let arr = ["s", "a", "u"];

// // console.log(arr.join(""));

// console.log("output is ", permute(arr.join("")));

// function permute(s, answer = "", arr = []) {
//   if (s.length == 0) {
//     arr.push(answer.split(""));
//   } else {
//     for (let i = 0; i < s.length; i++) {
//       let ch = s[i];
//       let left_substr = s.slice(0, i);
//       let right_substr = s.slice(i + 1);
//       let rest = left_substr + right_substr;
//       permute(rest, answer + ch, arr);
//     }
//   }
//   return arr;
// }

// function climbStairs(n) {
//   const memo = {};
//   const count = getCount(n, memo);
//   return count;
// }

// const count = climbStairs(4);
// console.log("count is ", count);

// function getCount(n, memo) {
//   if (memo[n] !== undefined) return memo[n];
//   if (n == 1) return 1;
//   if (n == 2) return 2;
//   memo[n] = getCount(n - 1, memo) + getCount(n - 2, memo);
//   return memo[n];
// }

const arr = [5, 4, -1, 7, 8];

findLongestSubArrayLen(arr);

function findLongestSubArrayLen(arr) {
  if (arr.length === 1) {
    console.log(arr[0]);
    return;
  }

  let total = -Infinity;
  let current = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    current += arr[i];
    console.log("cur is ", arr[i]);
    console.log("current value is ", current);
    if (current > total) {
      total = current;
    }

    if (current < 0) {
      current = 0;
    }
  }

  console.table(total);
}
