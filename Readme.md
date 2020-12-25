# DS Algorithm Questions in Javascript() {...}
*A mostly reasonable collection of technical software development interview questions solved in JS*

## Table of Contents
1. [Stack](#stack)
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

- **[1.2](#short-stack) find short path valid unix command**
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