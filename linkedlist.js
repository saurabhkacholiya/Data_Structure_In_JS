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
