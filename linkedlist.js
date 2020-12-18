function Node(value){
    this.value = value
    this.next = null
}

function LinkedList() {
    this.head = null

    this.log = function log(){
        console.log(JSON.stringify(this.head,null,4))
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
    this.remove = function remove(){
  
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
    this.contains = function contains() {
  
    }  
    /*
    * Checks if a node is the head of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the head, otherwise false
    */
    this.isHead = function isHead() {
  
    }
    /*
    * Checks if a node is the tail of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the tail, otherwise false
    */
    this.isTail = function isTail() {
  
    }
  }


const ll = new LinkedList()

ll.insert(10)

ll.log()
ll.removeTail()
ll.log()