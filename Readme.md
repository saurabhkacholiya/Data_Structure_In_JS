# DS Algorithm Questions in Javascript() {...}
*A mostly reasonable collection of technical software development interview questions solved in JS*

## Table of Contents
1. [Stack](#stack)
1. [Recursion](#recursion)
1. [LinkedList](#linkedList)
1. [BinarySearch](#binarySearch)
1. [MergeSort](#mergeSort)
1. [BubbleSort](#bubbleSort)
1. [Queue](#queue)
1. To Be Continued

## Stack
<a name="stack--create-stack"></a><a name="1.1"></a>

**[1.1](#stack--create-stack) Create Stack**
```javascript
function Stack() {

    this._storage = [];

    this.push = function push(value) {
        this._storage.push(value)
        console.log(this._storage)
    }

    this.pop = function pop() {
        this._storage.pop()
        console.log(this._storage)
    }

    this.peek = function peek() {
        console.log(this._storage[this._storage.length - 1])
    }
}

const myStack = new Stack();
myStack.push(45)
myStack.peek()
myStack.peek()

```
<a name="short-path"></a><a name="1.2"></a>

**[1.2](#short-stack) find short path valid unix command**
```javascript
const path = "/../../foo/../../bar/baz"

function shortenPath(path) {
	const startWithSlash = path[0] == '/'
	const filterPath = path.split('/').filter(filterString)
	const stack = []
	if(startWithSlash){ stack.push('') }
	for(const char of filterPath){
		if(char == '..'){
			if(stack.length == 0 || stack[stack.length -1 ] == '..'){
				stack.push('..')
			}else if(stack[stack.length -1] != ''){
				stack.pop()
			}
		}else{
			stack.push(char)
		}
	}
	if(stack.length == 1 && stack[0] == '') return '/'
	return stack.join('/')
}


function filterString(item){
	return item.length > 0 && item != '.'
}

```
<a name="stack--balanced-string"></a><a name="1.3"></a>

**[1.3](#stack--balanced-string) Return the perfect balanced tree**
```javascript 
const string = "([])(){}(())()()"

balancedBrackets(string)

function balancedBrackets(string) {
	if(!string.length){
		return false
	}
    let arr = []
	for(let i = 0; i < string.length; i++){
		if(string[i] === "]"){
			if(arr[arr.length - 1] !== "[" ){
				 return false
			}else{
				arr.pop()
			}
		}else if(string[i] === ')'){
			if(arr[arr.length - 1] !== "(" ){
				 return false
			}else{
				arr.pop()
			}
		}else if(string[i] === '}'){
			if(arr[arr.length - 1] !== "{" ){
				 return false
			}else{
				arr.pop()
			}
		}else{
			arr.push(string[i])
		}
	}
	
	return arr.length === 0
}

```
## Recursion
**[2.1](#recursion--find-product-sum) Find the product sum according to the degree**

```javascript
// Sample Input: array=array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// Sample Output: 12 (calculated as: 5 + 2 + 2*(7 + -1) + 3 + 2*(6 + 3 * (-13 + 8))

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])

function productSum(array,multipler = 1) { 
    let sum = 0
	array.forEach(item => {
		if(Array.isArray(item)){
			sum += productSum(item,multipler + 1)
		}else{
			sum += item
		}
	})
	return sum * multipler
}
```

**[2.2](#recursion--find-permutation) Find the permutation of string**

```javascript

getPermutation([1,2,3])

function getPermutation(arr){
	let permutation = []
	permutationHelper(0,arr,permutation)
	return permutation
}

function permutationHelper(i,arr,permutation){
	if(i === arr.length -1){
		permutation.push(arr.slice())
	}else{
		for(let j = i ; j < arr.length ; j++){
			swap(i,j,arr)
			permutationHelper(i + 1, arr, permutation)
			swap(i,j,arr)
		}
	}
}

function swap(i,j,array){
	temp = array[i]
	array[i] = array[j]
	array[j] = temp
}
```

**[2.3](#recursion--find-fibonacchi) Find the fibonacchi of given element**

```javascript

fibonacchi(10)

function fibonacchi(n){
	if(n == 1) return 0
	if(n == 2) return 1
	return fibonacchi(n - 2) + fibonacchi(n -1)
}
```
**[2.4](#recursion--find-powerset) Find the powerset of given element**

```javascript
// input = [1,2,3] 
// output = [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]

powerset( [1, 2, 3])

function powerset(arr){
    const subset = [[]]
    for(const ele of arr){
        const length = subset.length
        for(let i = 0 ; i < length; i++){
            const currentSubset = subset[i]
            subset.push(currentSubset.concat(ele))
        }
    }
    console.log(subset)
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

function Node(value){
    this.value = value
    this.next = null
}

function LinkedList() {
    this.head = null

    this.log = function log(value = this.head){
        console.log(JSON.stringify(value,null,4))
    }

    this.printAll = function printAll(){
        let currNode = this.head
        while(currNode){
            console.log(currNode.value)
            currNode = currNode.next
        }
    }

    this.insert = function insert(value){
        const node = new Node(value)
        let lastNode = this.head
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next
            }
            lastNode.next = node
        }else{
            this.head = node
        }
    }
    /*
    * Deletes a node
    * @param {*} node - the node to remove
    * @return {*} value - the deleted node's value
    */

    this.remove = function remove(ele){  // 10 
        let elementFoud = false
        var currNode = this.head
        let prevOfCurrNode = null
        while(currNode){
            if(currNode.value == ele){
                if(prevOfCurrNode == null){
                    this.head = currNode.next // this works but the above doesn't
                }else{
                    prevOfCurrNode.next = currNode.next
                }
                elementFoud = true
                break
            }
            prevOfCurrNode = currNode
            currNode = currNode.next
        }
        elementFoud ? this.log() : this.log('Not found')
    }
    /*
    * Removes the value at the end of the linked list
    * @return {*} - the removed value
    */
    this.removeTail = function removeTail(){
        if(!this.head) return
        let currNode = this.head
        let prevOfCurrNode = this.head
        while(currNode.next){
            prevOfCurrNode = currNode
            currNode = currNode.next
        }
        if(prevOfCurrNode.next) prevOfCurrNode.next = null
        else this.head = null // only one item in the list
    }
    /*
    * Searches the linked list and returns true if it contains the value passed
    * @param {*} value - the value to search for
    * @return {boolean} - true if value is found, otherwise false
    */
    this.contains = function contains(ele) {
        let status = false 
        let currNode = this.head
        while(currNode){
            if(currNode.value == ele){
                status = true
            }
            currNode = currNode.next
        }
        if(status){
            console.log(`element found ${ele}`)
        }else{
            console.log('Element not found')
        }
    }  
    /*
    * Checks if a node is the head of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the head, otherwise false
    */
    this.isHead = function isHead(ele) {
        let status = (this.head && this.head.value == ele)
        if(status) this.log(true)
        else this.log(false)
    }
    /*
    * Checks if a node is the tail of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the tail, otherwise false
    */
    this.isTail = function isTail(ele) {
        if(this.head == null){
            this.log(false)
            return
        }
        let currNode = this.head
        while(currNode.next){
            currNode = currNode.next
        }
        return currNode.value == ele ? this.log(true) : this.log(false)
    }
  }


const ll = new LinkedList()

ll.insert(10)
ll.insert(20)
ll.insert(30)
ll.insert(40)
ll.insert(50)

ll.log()

ll.remove(10)

```
## BinarySearch

**[4.1](#binarySearch) Write Binary Search**

```javascript
binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73],71)

function binarySearch(arr,item){
    let min = 0
    let max = arr.length -1 
    let guess 

    while(min <= max){
        guess = Math.round((min + max)/2)
        if(arr[guess] == item){
            return guess
        }else{
            if(arr[guess] < item){
                min = guess + 1 
            }else{
                max = guess - 1
            }
        }
    }

    return -1
}

```

## MergeSort

**[4.1](#MergeSort) Write MergeSort**

```javascript
// slice method does not include the last given index 
// eg -> arr = [1,2,3,4]
// arr.slice(0,3) -> it will start from arr[0] and end on arr[2] --> output [1,2,3]
// and if arr.slice(3) so it will start form the given index -->  output [4]
// o(n log n) because we are always dividing array in half

const arr = [8, 5, 2, 9, 5, 6, 3]

console.log('input ', arr)
console.log('output ',mergeSort(arr))

function mergeSort(arr) {
      if(arr.length == 1 ) return arr
      const middle = Math.round(arr.length/2)
      const left = arr.slice(0,middle)
      const right = arr.slice(middle)
      const sortedLeft = mergeSort(left)
      const sortedRight = mergeSort(right)
      return merge(sortedLeft,sortedRight)
  }
  
  function merge(left,right){
      const result = []
      let leftIndex = 0
      let rightIndex = 0
      while(leftIndex < left.length && rightIndex < right.length){
          if(left[leftIndex] < right[rightIndex]){
              result.push(left[leftIndex])
              leftIndex++
          }else{
              result.push(right[rightIndex])
              rightIndex++
          }
      }
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  }
```

## BubbleSort

**[5.1](#BubbleSort) Write BubbleSort**

```javascript

// sort adjacent values 

const arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

bubbleSort(arr)

function swap(i,j,arr){
    const temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}

function bubbleSort(arr){
    for(let j = 0; j < arr.length; j++){
        for (let i = 0; i < arr.length - j; i++) {
            if(arr[i] > arr[i + 1]){
                swap(i,i+1,arr)
            }
        }
    }
    console.log(arr)
}
```
## Queue

**[6.1](#queue) create queue**

```javascript
function Queue() {
    this.storage = []

    this.enqueue = function enqueue(value){
        this.storage.push(value)
    }
    this.dequeue = function dequeue() {
        console.log(this.storage.shift())
    }

    this.peek = function peek(){
        console.log(this.storage[0])
    }

    this.log = () => console.log(this.storage)
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(39)
queue.enqueue(40)

queue.log()
queue.dequeue()

queue.peek()
```