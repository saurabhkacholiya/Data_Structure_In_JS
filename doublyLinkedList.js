
function Node(value){
    this.value = value;
    this.prev = null;
    this.next = null;
}
  
function DoublyLinkedList() {

    this.head = null;
    this.tail = null;
    this.length = 0;
    
    //adds a node at the end of the list
    this.push = function(val) {
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode 
            this.tail = newNode
        }
        this.length++
    }

    this.pop = function(){
        if(this.length == 0){
            console.log('List is empty')
            return
        }

        const checkIfNodeIsLastElement = this.tail.prev

        if(checkIfNodeIsLastElement){
            this.tail = this.tail.prev
            this.tail.next = null 
        }else{
            this.head = null
        }

        this.length--

    }

    this.shift = function(){

        if(this.length == 0){
            console.log('List is empty')
            return
        }

        if(this.head.next){
            this.head = this.head.next
            this.head.prev = null
        }else{
            this.head = null
        }

        this.length--

    }

    this.unshift = function(val) {
        const newNode = new Node(val)

        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
    }

    this.log = function(){
        console.log('-------start--------')
        console.log(this.head)
        console.log('-------end--------')
    }
}

const dll = new DoublyLinkedList()

// dll.push(10)
// dll.push(20)
// dll.push(30)

dll.unshift(45)
dll.unshift(55)
// dll.unshift(65)

dll.log()


// dll.log()

// dll.shift()
// dll.log()

// dll.shift()
// dll.log()

// dll.shift()
// dll.log()


// dll.pop()

