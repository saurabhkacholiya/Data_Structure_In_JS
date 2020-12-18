function LinkedList() {
    this.node = null

    this.log = function log(){
        console.log(JSON.stringify(this.node))
    }

    this.printAll = function printAll(){
        let currNode = this.node
        while(currNode){
            console.log(currNode.value)
            currNode = currNode.next
        }
    }

    this.insert = function insert(value){
        let lastNode = this.node
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next
            }
            lastNode.next = {
                value,
                next: null,
            }
        }else{
            this.node = {
                value,
                next : null,
            }
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
ll.insert(20)
ll.insert(30)
ll.insert(40)


ll.printAll()