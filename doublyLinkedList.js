
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

    this.insertAtIndex = function(val,index){
        if(index > this.length){
            console.log('Index is greater than lenght')
            return
        }
        if(index == 0){
            this.unshift(val)
        }else if(index == this.length){
            this.push(val)
        }else{
            const newNode = new Node(val)
            let currNode = this.head
            let loopValue = 1
            while(loopValue < index){
                currNode = currNode.next
                loopValue++
            }
            const afterNode = currNode.next
            newNode.next = currNode.next
            newNode.prev = currNode
            afterNode.prev = newNode
            currNode.next = newNode
            this.length++
        }
    }

    this.removeAtIndex = function(index){
        if(index > this.length){
            console.log('Index is greater')
            return
        }
        if(index == 0){
            this.shift()
        }else if(index == this.length){
            this.pop()
        }else{
            let currNode = this.head
            while(index){
                currNode = currNode.next
                index--
            }
            const afterElem = currNode.next 
            const beforeElem = currNode.prev 
            afterElem.prev = beforeElem
            beforeElem.next = afterElem
            this.length--
        }
    }

    this.log = function(){
        if(this.head){
            let currNode = this.head
            while(currNode){
                console.log(currNode.value)
                currNode = currNode.next
            }
        }else{
            console.log('List Empty')
        }
    }
}

const dll = new DoublyLinkedList()

dll.push(10)
dll.push(20)
dll.push(30)
dll.push(40)

dll.removeAtIndex(4)
dll.log()