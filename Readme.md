# DS Algorithm Questions in Javascript() {...}

_A mostly reasonable collection of technical software development interview questions solved in J_

## Table of Contents

1. [Stack](#stack)
1. [Recursion](#recursion)
1. [LinkedList](#linkedList)
1. [DoublyLinkedList](#doublyLinkedList)
1. [BinarySearch](#binarySearch)
1. [MergeSort](#mergeSort)
1. [BubbleSort](#bubbleSort)
1. [Queue](#queue)
1. [BinarySearchTree](#binarySearchTree)
1. [InsertionSort](#insertionSort)
1. [SelectionSort](#selectionSort)
1. [QuickSort](#quickSort)
1. [Heap](#heap)
1. [DFT](#dft)
1. [BFT](#bft)
1. [PathFinding](#pathFinding)
1. [Graph](#graph)
1. To Be Continued

## Stack

<a name="stack--create-stack"></a><a name="1.1"></a>

**[1.1](#stack--create-stack) Create Stack**

```javascript
function Stack() {
  this._storage = [];

  this.push = function push(value) {
    this._storage.push(value);
    console.log(this._storage);
  };

  this.pop = function pop() {
    this._storage.pop();
    console.log(this._storage);
  };

  this.peek = function peek() {
    console.log(this._storage[this._storage.length - 1]);
  };
}

const myStack = new Stack();
myStack.push(45);
myStack.peek();
myStack.peek();
```

<a name="short-path"></a><a name="1.2"></a>

**[1.2](#short-stack) find short path valid unix command**

```javascript
const path = "/../../foo/../../bar/baz";

function shortenPath(path) {
  const startWithSlash = path[0] == "/";
  const filterPath = path.split("/").filter(filterString);
  const stack = [];
  if (startWithSlash) {
    stack.push("");
  }
  for (const char of filterPath) {
    if (char == "..") {
      if (stack.length == 0 || stack[stack.length - 1] == "..") {
        stack.push("..");
      } else if (stack[stack.length - 1] != "") {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }
  if (stack.length == 1 && stack[0] == "") return "/";
  return stack.join("/");
}

function filterString(item) {
  return item.length > 0 && item != ".";
}
```

<a name="stack--balanced-string"></a><a name="1.3"></a>

**[1.3](#stack--balanced-string) Return the perfect balanced tree**

```javascript
const string = "([])(){}(())()()";

balancedBrackets(string);

function balancedBrackets(string) {
  if (!string.length) {
    return false;
  }
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "]") {
      if (arr[arr.length - 1] !== "[") {
        return false;
      } else {
        arr.pop();
      }
    } else if (string[i] === ")") {
      if (arr[arr.length - 1] !== "(") {
        return false;
      } else {
        arr.pop();
      }
    } else if (string[i] === "}") {
      if (arr[arr.length - 1] !== "{") {
        return false;
      } else {
        arr.pop();
      }
    } else {
      arr.push(string[i]);
    }
  }

  return arr.length === 0;
}
```

**[1.4](#stack) Number of buildings facing the sun**

```javascript
/*
Given an array representing heights of buildings. The array has buildings from left to right as shown in below diagram, count number of buildings facing the sunset. It is assumed that heights of all buildings are distinct.

EXAMPLE :- 
Input : arr[] = {7, 4, 8, 2, 9}
Output: [0,1,4]
Explanation: As 7 is the first element, it can 
see the sunset.
4 can't see the sunset as 7 is hiding it. 
8 can see.
2 can't see the sunset.
9 also can see the sunset.
*/
const arr = [20, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8];
const direction = "EAST";

sunsetViews(arr, direction);
function sunsetViews(buildings, direction) {
  const buildingList = [];
  if (direction == "WEST") {
    let greatestOfAll = buildings[0];
    buildingList.push(0);
    for (let i = 1; i < buildings.length; i++) {
      if (buildings[i] > greatestOfAll) {
        buildingList.push(i);
        greatestOfAll = buildings[i];
      }
    }
  } else {
    let greatestOfAll = buildings[buildings.length - 1];
    buildingList.push(buildings.length - 1);
    const secondLastIndex = buildings.length - 2;
    for (let i = secondLastIndex; i > -1; i--) {
      if (buildings[i] > greatestOfAll) {
        buildingList.push(i);
        greatestOfAll = buildings[i];
      }
    }
  }
  console.log(buildingList.sort((a, b) => a - b));
}
```

## Recursion

**[2.1](#recursion--find-product-sum) Find the product sum according to the degree**

```javascript
// Sample Input: array=array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// Sample Output: 12 (calculated as: 5 + 2 + 2*(7 + -1) + 3 + 2*(6 + 3 * (-13 + 8))

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);

function productSum(array, multipler = 1) {
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += productSum(item, multipler + 1);
    } else {
      sum += item;
    }
  });
  return sum * multipler;
}
```

**[2.2](#recursion--find-permutation) Find the permutation of string**

```javascript
getPermutation([1, 2, 3]);

function getPermutation(arr) {
  let permutation = [];
  permutationHelper(0, arr, permutation);
  return permutation;
}

function permutationHelper(i, arr, permutation) {
  if (i === arr.length - 1) {
    permutation.push(arr.slice());
  } else {
    for (let j = i; j < arr.length; j++) {
      swap(i, j, arr);
      permutationHelper(i + 1, arr, permutation);
      swap(i, j, arr);
    }
  }
}

function swap(i, j, array) {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
```

**[2.3](#recursion--find-fibonacchi) Find the fibonacchi of given element**

```javascript
fibonacchi(10);

function fibonacchi(n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  return fibonacchi(n - 2) + fibonacchi(n - 1);
}
```

**[2.4](#recursion--find-powerset) Find the powerset of given element**

```javascript
// input = [1,2,3]
// output = [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]

powerset([1, 2, 3]);

function powerset(arr) {
  const subset = [[]];
  for (const ele of arr) {
    const length = subset.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subset[i];
      subset.push(currentSubset.concat(ele));
    }
  }
  console.log(subset);
}
```

**[2.5](#recursion--Interleaving-String) Interleaving String**

```javascript
/* 
Given strings s1, s2, and s3, find whether s3 is formed by /an interleaving of s1 and s2.

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true

*/
const one = "saur";
const three = "sakaurcho";
const two = "kacho";

checkIfString(one, two, three);

function checkIfString(one, two, three) {
  if (three.length !== one.length + two.length) return false;
  console.log(recursivePart(one, two, three, 0, 0));
}

function recursivePart(one, two, three, i, j) {
  let k = i + j;
  if (k == three.length) return true;

  if (i < one.length && one[i] == three[k]) {
    if (recursivePart(one, two, three, i + 1, j)) return true;
  }

  if (j < two.length && two[j] == three[k]) {
    return recursivePart(one, two, three, i, j + 1);
  }

  return false;
}

//----------------with caching---------------

function checkIfStringWithCaching(one, two, three) {
  if (three.length !== one.length + two.length) {
    return false;
  }
  const cache = new Array(one.length + 1)
    .fill(0)
    .map((_) => new Array(two.length + 1).fill(null));
  return areInterwoven(one, two, three, 0, 0, cache);
}

function recursivePartWithCaching(one, two, three, i, j, cache) {
  if (cache[i][j] !== null) return cache[i][j];
  const k = i + j;
  if (k == three.length) return true;

  if (i < one.length && one[i] == three[k]) {
    cache[i][j] = recursivePartWithCaching(one, two, three, i + 1, j, cache);
    if (cache[i][j]) return true;
  }

  if (j < two.length && two[j] == three[k]) {
    cache[i][j] = recursivePartWithCaching(one, two, three, i, j + 1, cache);
    return cache[i][j];
  }

  return false;
}
```

**[2.6](#recursion--Find-binary-tree-topologies)Find-binary-tree-topologies**

```javascript
calculateBinaryTreeTopologies(17);

function calculateBinaryTreeTopologies(n) {
  console.log(caculateTopologies(n));
}

function caculateTopologies(n, cache = { 0: 1 }) {
  if (cache[n]) return cache[n];
  let totalNumber = 0;
  for (let left = 0; left < n; left++) {
    const right = n - 1 - left;
    const leftValue = caculateTopologies(left, cache);
    const rightValue = caculateTopologies(right, cache);
    totalNumber += leftValue * rightValue;
  }
  cache[n] = totalNumber;
  return totalNumber;
}
```

## LinkedList

**[3.1](#linkedList--create-ll) create linkedList**

```javascript
/*
    sample output 
    const node = {
        value : 10,
        next : {
            value : 20,
            next : {
                value : 30,
                next : null
            }
        }
    }
*/

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;

  this.log = function log(value = this.head) {
    console.log(JSON.stringify(value, null, 4));
  };

  this.printAll = function printAll() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  };

  this.insert = function insert(value) {
    const node = new Node(value);
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
    } else {
      this.head = node;
    }
  };
  /*
   * Deletes a node
   * @param {*} node - the node to remove
   * @return {*} value - the deleted node's value
   */

  this.remove = function remove(ele) {
    // 10
    let elementFoud = false;
    var currNode = this.head;
    let prevOfCurrNode = null;
    while (currNode) {
      if (currNode.value == ele) {
        if (prevOfCurrNode == null) {
          this.head = currNode.next; // this works but the above doesn't
        } else {
          prevOfCurrNode.next = currNode.next;
        }
        elementFoud = true;
        break;
      }
      prevOfCurrNode = currNode;
      currNode = currNode.next;
    }
    elementFoud ? this.log() : this.log("Not found");
  };
  /*
   * Removes the value at the end of the linked list
   * @return {*} - the removed value
   */
  this.removeTail = function removeTail() {
    if (!this.head) return;
    let currNode = this.head;
    let prevOfCurrNode = this.head;
    while (currNode.next) {
      prevOfCurrNode = currNode;
      currNode = currNode.next;
    }
    if (prevOfCurrNode.next) prevOfCurrNode.next = null;
    else this.head = null; // only one item in the list
  };
  /*
   * Searches the linked list and returns true if it contains the value passed
   * @param {*} value - the value to search for
   * @return {boolean} - true if value is found, otherwise false
   */
  this.contains = function contains(ele) {
    let status = false;
    let currNode = this.head;
    while (currNode) {
      if (currNode.value == ele) {
        status = true;
      }
      currNode = currNode.next;
    }
    if (status) {
      console.log(`element found ${ele}`);
    } else {
      console.log("Element not found");
    }
  };
  /*
   * Checks if a node is the head of the linked list
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the head, otherwise false
   */
  this.isHead = function isHead(ele) {
    let status = this.head && this.head.value == ele;
    if (status) this.log(true);
    else this.log(false);
  };
  /*
   * Checks if a node is the tail of the linked list
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the tail, otherwise false
   */
  this.isTail = function isTail(ele) {
    if (this.head == null) {
      this.log(false);
      return;
    }
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode.value == ele ? this.log(true) : this.log(false);
  };
}

const ll = new LinkedList();

ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);

ll.log();

ll.remove(10);
```

**[3.2](#linkedList-remove) Remove Nth Node From End of List**
[Link on leet code](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

```javascript
var removeNthFromEnd = function (head, n) {
  let count = 1;
  let first = head;
  let second = head;

  while (count <= n) {
    second = second.next;
    count++;
  }

  if (second == null) {
    return first.next;
  }

  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }

  first.next = first.next.next;

  return head;
};
```

**[3.3](#linkedList-cycle)Find Linked List Cycle**
[Link on leet code](https://leetcode.com/problems/linked-list-cycle/submissions/)

```javascript
var hasCycle = function (head) {
  if (head == null) return false;
  let fastPointer = head.next;
  let slowPointer = head;

  while (slowPointer !== fastPointer) {
    if (fastPointer == null || fastPointer.next == null) {
      return false;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return true;
};

//-------find linked list cycled element--------

function findLoopElement(head) {
  let slowPointer = head.next;
  let fastPointer = head.next.next;
  while (slowPointer !== fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  slowPointer = head; // to find the orgin of the loop
  while (slowPointer !== fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }
  return slowPointer;
}
```

**[3.4](#linkedList-reverse-linkedlist) Reverse Linked List**
[Link on leet code](https://leetcode.com/problems/reverse-linked-list/submissions/)

```javascript
var reverseList = function (head) {
  let pointer1 = null;
  let pointer2 = head;
  let pointer3 = null;

  while (pointer2 !== null) {
    pointer3 = pointer2.next;
    pointer2.next = pointer1; // reverse the link
    pointer1 = pointer2;
    pointer2 = pointer3;
  }
  return pointer1;
};
```

**[3.5](#linkedList-reverse-linkedlist-between-given-no) Reverse Linked List II**
[Link on leet code](https://leetcode.com/problems/reverse-linked-list-ii/)

```javascript
var reverseBetween = function (head, m, n) {
  let start = head;
  let curr = head;
  let count = 1;

  while (count < m) {
    start = curr;
    curr = curr.next;
    count++;
  }

  let prev = null;
  let tail = curr;

  while (count <= n) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
  }

  start.next = prev;
  tail.next = curr;

  return m == 1 ? prev : head;
};
```

**[3.6](#linkedList-Merge-Two-Sorted-Lists) Merge Two Sorted Lists**
[Link on leet code](https://leetcode.com/problems/reverse-linked-list-ii/)

```javascript
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return l1;
  if (!l1 && l2) return l2;
  if (!l2 && l1) return l1;

  let p1 = l1;
  let p2 = l2;
  let prev = null;

  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      prev = p1;
      p1 = p1.next;
    } else {
      if (prev) prev.next = p2;
      prev = p2;
      p2 = p2.next;
      prev.next = p1;
    }
  }

  if (p1 == null) prev.next = p2;

  return l1.val < l2.val ? l1 : l2;
};
```

**[3.7](#linkedList-palindrome) Palindrome Linked List**
[Link on leet code](https://leetcode.com/problems/palindrome-linked-list/)

```javascript
var isPalindrome = function (head) {
  if (!head) return true;
  if (head.next == null) return true;
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  if (slowPointer == fastPointer) {
    if (!slowPointer.next) return false;
    const nextPOinter = slowPointer.next;
    return slowPointer.val == nextPOinter.val;
  }

  let reverseList = reverseLinkedList(slowPointer);
  let firstHalfList = head;

  while (reverseList !== null) {
    if (reverseList.val !== firstHalfList.val) return false;
    reverseList = reverseList.next;
    firstHalfList = firstHalfList.next;
  }

  return true;
};

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}
```

**[3.7.2](#linkedList-palindrome) Palindrome Linked List (recursive solution)**
[Link on leet code](https://leetcode.com/problems/palindrome-linked-list/)

```javascript
var isPalindrome = function (head) {
  let curr = head;
  function checkIfPalindrome(node) {
    if (node == null) {
      return true;
    }
    // traverse to the end of the list first
    const prevResult = checkIfPalindrome(node.next);
    // when the call stack bounces back, compare the values
    // from the head and from the bottom up
    const computeResult = curr.val == node.val;
    curr = curr.next;
    return prevResult && computeResult;
  }

  return checkIfPalindrome(head);
};
```

## DoublyLinkedList

**[4.1](#doublyLinkedList) Create DoublyLinkedList**

```javascript
function Node(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  //adds a node at the end of the list
  this.push = function (val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  this.pop = function () {
    if (this.length == 0) {
      console.log("List is empty");
      return;
    }

    const checkIfNodeIsLastElement = this.tail.prev;

    if (checkIfNodeIsLastElement) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.head = null;
    }

    this.length--;
  };

  this.shift = function () {
    if (this.length == 0) {
      console.log("List is empty");
      return;
    }

    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
    }

    this.length--;
  };

  this.unshift = function (val) {
    const newNode = new Node(val);

    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  };

  this.insertAtIndex = function (val, index) {
    if (index > this.length) {
      console.log("Index is greater than lenght");
      return;
    }
    if (index == 0) {
      this.unshift(val);
    } else if (index == this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      let currNode = this.head;
      let loopValue = 1;
      while (loopValue < index) {
        currNode = currNode.next;
        loopValue++;
      }
      const afterNode = currNode.next;
      newNode.next = currNode.next;
      newNode.prev = currNode;
      afterNode.prev = newNode;
      currNode.next = newNode;
      this.length++;
    }
  };

  this.removeAtIndex = function (index) {
    if (index > this.length) {
      console.log("Index is greater");
      return;
    }
    if (index == 0) {
      this.shift();
    } else if (index == this.length) {
      this.pop();
    } else {
      let currNode = this.head;
      while (index) {
        currNode = currNode.next;
        index--;
      }
      const afterElem = currNode.next;
      const beforeElem = currNode.prev;
      afterElem.prev = beforeElem;
      beforeElem.next = afterElem;
      this.length--;
    }
  };

  this.log = function () {
    if (this.head) {
      let currNode = this.head;
      while (currNode) {
        console.log(currNode.value);
        currNode = currNode.next;
      }
    } else {
      console.log("List Empty");
    }
  };
}

const dll = new DoublyLinkedList();

dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);

dll.removeAtIndex(4);
dll.log();
```

**[4.2](#doublyLinkedList-LRU-Cache) Create LRU-Cache**
[Link on leet code](https://leetcode.com/problems/lru-cache/submissions/)

```javascript
var LRUCache = function (capacity) {
  this.maxSize = capacity;
  this.cache = {};
  this.listOfMostRecentUsed = new DoublyLinkedList();
  this.currentSize = 0;

  this.evictLeastUsed = () => {
    if (!this.listOfMostRecentUsed.tail) return;
    const keyToDelete = this.listOfMostRecentUsed.tail.key;
    this.listOfMostRecentUsed.removeTail();
    delete this.cache[keyToDelete];
  };

  this.updateHeader = (node) => {
    this.listOfMostRecentUsed.setHeader(node);
  };
};

LRUCache.prototype.get = function (key) {
  if (key in this.cache) {
    this.listOfMostRecentUsed.setHeader(this.cache[key]);
    return this.cache[key].value;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (!(key in this.cache)) {
    if (this.maxSize == this.currentSize) {
      this.evictLeastUsed();
    } else {
      this.currentSize += 1;
    }

    this.cache[key] = new DoublyLinkedListNode(key, value);
  } else {
    if (key in this.cache) {
      this.cache[key].value = value;
    }
  }

  this.updateHeader(this.cache[key]);
};

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHeader(node) {
    //1. head is node
    //2. head is null
    //3. head is equal to tail so only one element present
    //4. if node == tail

    if (this.head == node) {
      return;
    } else if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else if (this.head == this.tail) {
      this.tail.prev = node;
      node.next = this.tail;
      this.head = node;
    } else {
      if (this.tail == node) this.removeTail();
      node.removeBinding();
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  removeTail() {
    //if tail is null
    //if tail ==  head

    if (this.tail == null) return;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
}

class DoublyLinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  removeBinding() {
    if (this.prev !== null) {
      this.prev.next = this.next;
    }

    if (this.next !== null) {
      this.next.prev = this.prev;
    }

    this.prev = null;
    this.next = null;
  }
}
```

## BinarySearch

**[5.1](#binarySearch) Write Binary Search**

```javascript
binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 71);

function binarySearch(arr, item) {
  let min = 0;
  let max = arr.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.round((min + max) / 2);
    if (arr[guess] == item) {
      return guess;
    } else {
      if (arr[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }

  return -1;
}
```

## MergeSort

**[6.1](#MergeSort) Write MergeSort**

```javascript
// slice method does not include the last given index
// eg -> arr = [1,2,3,4]
// arr.slice(0,3) -> it will start from arr[0] and end on arr[2] --> output [1,2,3]
// and if arr.slice(3) so it will slice form the given index -->
// eg let a = [1,2,3]; a.slice(1) output will be [2,3]
// o(n log n) because we are always dividing array in half

const arr = [8, 5, 2, 9, 5, 6, 3];

console.log("input ", arr);
console.log("output ", mergeSort(arr));

function mergeSort(arr) {
  if (arr.length == 1) return arr;
  const middle = Math.round(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

## BubbleSort

**[7.1](#BubbleSort) Write BubbleSort**

```javascript
// sort adjacent values

const arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

bubbleSort(arr);

function swap(i, j, arr) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1, arr);
      }
    }
  }
  console.log(arr);
}
```

## Queue

**[8.1](#queue) create queue**

```javascript
function Queue() {
  this.storage = [];

  this.enqueue = function enqueue(value) {
    this.storage.push(value);
  };
  this.dequeue = function dequeue() {
    console.log(this.storage.shift());
  };

  this.peek = function peek() {
    console.log(this.storage[0]);
  };

  this.log = () => console.log(this.storage);
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(39);
queue.enqueue(40);

queue.log();
queue.dequeue();

queue.peek();
```

## BinarySearchTree

**[9.1](#findClosestValueInBst) Find the closet value in BST**

```javascript
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return bstHelper(tree, target, tree.value);
}

function bstHelper(tree, target, closet) {
  if (tree == null) return closet;

  if (Math.abs(target - closet) > Math.abs(tree.value - target)) {
    closet = tree.value;
  }

  if (target > tree.value) {
    return bstHelper(tree.right, target, closet);
  } else if (target < tree.value) {
    return bstHelper(tree.left, target, closet);
  } else {
    return closet;
  }
}
```

**[9.2](#createBinaryTree) Create binary tree**

```javascript
/*

Binary Search Tree!

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

class Tree {
  constructor() {
    this.root = null;
  }

  toObject() {
    return this.root;
  }

  travesTheTree(node, root) {
    if (root) {
      if (node.value > root.value) {
        if (root.right) {
          this.travesTheTree(node, root.right);
        } else {
          root.right = node;
        }
      } else {
        if (root.left) {
          this.travesTheTree(node, root.left);
        } else {
          root.left = node;
        }
      }
    } else {
      this.root = node;
    }
  }

  add(value) {
    const newNode = new Node(value);
    this.travesTheTree(newNode, this.root);
  }
}

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
const tree = new Tree();
nums.map((num) => tree.add(num));
```

## InsertionSort

**[10.1](#insertionSort) insertionSort**

```javascript
function insertionSort(array) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
```

## SelectionSort

**[11.1](#selectionSort) SelectionSort**

```javascript
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        swap(i, j, array);
      }
    }
  }
  return array;
}

// using while loop

function selectionSort(array) {
  let startIdx = 0;
  while (startIdx < array.length) {
    let smallest = startIdx;
    for (let j = smallest + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) smallest = j;
    }
    swap(startIdx, smallest, array);
    startIdx++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
```

## QuickSort

**[12.1](#quickSort) QuickSort**

```javascript
// Algorithm
// 1. base case when startIndex >= RightIndex
// 2. let pivotIndex = startIndex
// 3. let left be pivotIndex + 1 and let right be endIdx
// 4. if leftIndex > pivotIndex and rightIndex < pivot swap()
// 5. if left <= pivot : increment left
// 6. if right >= pivot : increment right
// 7. end of while loop swap(pivot,rightIdx)

function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return; // base case
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  while (leftIdx <= rightIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] <= array[pivotIdx]) leftIdx += 1;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx -= 1;
  }
  swap(pivotIdx, rightIdx, array);

  let leftSideOfPivot = rightIdx - 1 - startIdx;
  let rightSideOfPivot = endIdx - (rightIdx + 1);

  const isLeftSideSmaller = leftSideOfPivot < rightSideOfPivot;
  if (isLeftSideSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
```

## Heap

**[13.1](#heap)Create Min Heap**

```javascript
/*

Min Heap 

i -> current index 
child One -> 2*i + 1
child Two -> 2*i + 2
Parent Node -> Math.floor((i - 1)/2)

Insert:- 
- add to last of heap
- siftUp 
    - compare node with parent node if parent node is bigger than swap

Remove:-
- swap last node with 1st node
- pop the last node
- siftDown on 1st node
    - compare both the children node of the current index passed and select the children node with smaller value 
    - compare smallestChildrenNode with current index passed

- Time Complexity  
    - sift down :- O(log n)  // where n is number of element in array 
    - sift up :- O(log n)  // where n is number of element in array 
    - insertion :- O(log n)  // where n is number of element in array 
    - removal :- O(log n)  // where n is number of element in array 
    - Build Heap:- O(n) while using sift down  // where n is number of element in array 
                :- O(n log n) while using sift up  // where n is number of element in array 
*/

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
    const lastIndex = array.length - 1;
    const firstParentIdx = Math.floor((lastIndex - 1) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, lastIndex, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    // Write your code here.
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let indexToSwap = null;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        indexToSwap = childTwoIdx;
      } else {
        indexToSwap = childOneIdx;
      }

      if (heap[indexToSwap] && heap[indexToSwap] < heap[currentIdx]) {
        this.swap(indexToSwap, currentIdx, heap);
        currentIdx = indexToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    // Write your code here.
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[parentIdx] > heap[currentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const nodeToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return nodeToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const input = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];

let minHeapObj = new MinHeap(input);

let count = 3;
let thirdSmallestValue = null;

while (count) {
  thirdSmallestValue = minHeapObj.remove();
  count--;
}

console.log("thirdSmallestValue is ", thirdSmallestValue);
```

**[13.2](#heap-sort)Heap Sort**

```javascript
const arr = [8, 10, 150, 9, 5, 6, 3];

maxHeap(arr);

function maxHeap(arr) {
  buildMaxHeap(arr);
  for (let endIdx = arr.length - 1; endIdx >= 0; endIdx--) {
    swap(0, endIdx, arr);
    siftDown(0, endIdx - 1, arr);
  }
  console.log("arr is ", arr);
}

function buildMaxHeap(arr) {
  const lastIdx = arr.length - 1;
  const firstParentIdx = Math.floor((lastIdx - 1) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, lastIdx, arr);
  }
}

function siftDown(currentIdx, endIdx, heap) {
  let childOneIdx = currentIdx * 2 + 1;
  while (childOneIdx <= endIdx) {
    const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let idxToSwap;
    if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }

    if (heap[idxToSwap] > heap[currentIdx]) {
      swap(currentIdx, idxToSwap, heap);
      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```

## DFT

**[14.1](#dft) Depth first traversal's**

```javascript
const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null,
      },
      right: {
        value: 11,
        left: null,
        right: null,
      },
    },
  },
};

const preOrderTraverse = (node, array) => {
  if (!node) return array;
  array.push(node.value);
  array = preOrderTraverse(node.left, array);
  array = preOrderTraverse(node.right, array);
  return array;
};

const inOrderTraverse = (node, array) => {
  if (!node) return array;
  array = inOrderTraverse(node.left, array);
  array.push(node.value);
  array = inOrderTraverse(node.right, array);
  return array;
};

const postOrderTraverse = (node, array) => {
  if (!node) return array;
  array = postOrderTraverse(node.left, array);
  array = postOrderTraverse(node.right, array);
  array.push(node.value);
  return array;
};

const value = postOrderTraverse(tree, []);
console.log(JSON.stringify(value, null, 4));

// Output should be preOrder, inOrder , postOrder
// [8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11]
// [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// [2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8]
```

## BFT

**[15.1] write Breadth first traversal**

```javascript
const tree = {
  value: "A",
  left: {
    value: "B",
    left: {
      value: "D",
      left: {
        value: "G",
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: "E",
      left: null,
      right: {
        value: "H",
        left: {
          value: "K",
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: "C",
    left: {
      value: "F",
      left: {
        value: "I",
        left: null,
        right: null,
      },
      right: {
        value: "J",
        left: null,
        right: null,
      },
    },
    right: null,
  },
};

const value = breadthFirstTraverse([tree], []);

console.log(JSON.stringify(value, null, 4));

// recursive
function breadthFirstTraverse(queue, array) {
  if (!queue || !queue.length) return array;
  const node = queue.shift();
  array.push(node.value);
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  return breadthFirstTraverse(queue, array);
}

// iterative
function breadthFirstTraverseIterative(queue, array) {
  if (!queue || !queue.length) return array;

  while (queue.length) {
    const node = queue.shift();
    array.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return array;
}
```

## PathFinding

**[16.1] Dijkstra's algorithm click [here](https://codepen.io/btholt/pen/BJMxVM?editors=0010) to check your code for test cases**

```javascript
const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

// so actually y column is represented by 1st array and x is represent by second array

const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
  const visited = maze.map((rows, y) =>
    rows.map((point, x) => ({
      closed: point === 1,
      openedBy: NO_ONE,
      length: 0,
      x,
      y,
    }))
  );
  visited[yA][xA].openedBy = BY_A;
  visited[yB][xB].openedBy = BY_B;

  let aQueue = [visited[yA][xA]];
  let bQueue = [visited[yB][xB]];
  let iteration = 0;

  while (aQueue.length && bQueue.length) {
    iteration++;
    const aNeighbor = aQueue.reduce(
      (acc, neighbor) =>
        acc.concat(getNeighbor(visited, neighbor.x, neighbor.y)),
      []
    );

    aQueue = [];

    for (let i = 0; i < aNeighbor.length; i++) {
      const aObj = aNeighbor[i];
      if (aObj.openedBy == BY_B) {
        return aObj.length + iteration;
      } else if (aObj.openedBy == NO_ONE) {
        aObj.length = iteration;
        aObj.openedBy = BY_A;
        aQueue.push(aObj);
      }
    }

    const bNeighbor = bQueue.reduce(
      (acc, neighbor) =>
        acc.concat(getNeighbor(visited, neighbor.x, neighbor.y)),
      []
    );

    bQueue = [];

    for (let i = 0; i < bNeighbor.length; i++) {
      const bObj = bNeighbor[i];
      if (bObj.openedBy == BY_A) {
        return bObj.length + iteration;
      } else if (bObj.openedBy == NO_ONE) {
        bObj.length = iteration;
        bObj.openedBy = BY_B;
        bQueue.push(bObj);
      }
    }
  }

  return -1;
};

const getNeighbor = (visited, x, y) => {
  const neighbor = [];
  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    neighbor.push(visited[y - 1][x]);
  }
  if (y + 1 < visited.length && !visited[y + 1][x].closed) {
    neighbor.push(visited[y + 1][x]);
  }
  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    neighbor.push(visited[y][x - 1]);
  }
  if (x + 1 < visited[0].length && !visited[y][x + 1].closed) {
    neighbor.push(visited[y][x + 1]);
  }
  return neighbor;
};

const fourByFour = [
  [2, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 2],
];

const value = findShortestPathLength(fourByFour, [0, 0], [3, 3]);

console.log(JSON.stringify(value, null, 4));
```

## Graph

**[17.1] Find the most common job title [here](https://codepen.io/btholt/pen/KZYdKW?editors=0010) to check your code for test cases**

```javascript
// the getUser function and data comes from this CodePen: https://codepen.io/btholt/pen/NXJGwa?editors=0010
// I recommend finishing these one at a time. if you put an x in front of the it so the function call is
// xit it will not run
const findMostCommonTitle = (myId, getUser, degreesOfSeparation) => {
  let queue = [myId];
  let seen = new Set();
  let jobs = {};

  for (let i = 0; i <= degreesOfSeparation; i++) {
    queue = queue
      .filter((id) => !seen.has(id))
      .map(getUser)
      .map((user) => {
        jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
        seen.add(user.id);
        return user;
      })
      .map((user) => user.connections)
      .reduce((acc, connection) => acc.concat(connection), []);
  }

  let highestCount = 0;
  let highestTitle = "";

  Object.keys(jobs).forEach((item) => {
    if (jobs[item] > highestCount) {
      highestCount = jobs[item];
      highestTitle = item;
    }
  });

  return highestTitle;
};
```
