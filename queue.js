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

