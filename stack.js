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
