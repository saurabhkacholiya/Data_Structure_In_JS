class LRUCache {
    constructor(maxSize) {
      this.maxSize = maxSize || 1;
          this.cache = {}
          this.listOfMostRecent = new DoublyLinkedList()
          this.currentSize = 0
    }
  
    insertKeyValuePair(key, value) {
          if(!(key in this.cache)){
              if(this.currentSize == this.maxSize){
                  this.removeLeastUsed() //need to write this 
              }else{
                  this.currentSize += 1
              }
              this.cache[key] = new DoublyLinkedListNode(key,value)
          }else{
              this.replaceKey(key,value)
          }
          this.updateMostRecent(this.cache[key]) // need to write the function 
    }
      
      updateMostRecent(node){
          this.listOfMostRecent.setHeadTo(node)
      }
      
      removeLeastUsed(){
          const keyToDelete = this.listOfMostRecent.tail.key
          this.listOfMostRecent.removeTail()
          delete this.cache[keyToDelete]
      }
  
    getValueFromKey(key) {
      if(key in this.cache){
              this.updateMostRecent(this.cache[key])
              return this.cache[key].value
          }
          return null
    }
  
    getMostRecentKey() {
          if(this.listOfMostRecent.head){
              return this.listOfMostRecent.head.key
          }
          return
    }
      
      replaceKey(key,value){
          if(key in this.cache){
              this.cache[key].value = value
          }
      }
  }
  
  class DoublyLinkedList{
      constructor(){
          this.head = null
          this.tail = null
      }
      
      setHeadTo(node){
          if(this.head == node){ // same node 
              return 
          } else if(this.head == null){ // if head is empty
              this.head = node
              this.tail = node
          } else if(this.head == this.tail){ //if list have only one node
              this.tail.prev = node
              node.next = this.tail // this.head = node 
              this.head = node // this.head.next = this.tail
          }else {
              if(this.tail == node) this.removeTail() // why we need remove tail bcz we want to maintain the most recent used node 
              node.removeBindings()
              this.head.prev = node 
              node.next = this.head
              this.head = node
          }
      }
      
      removeTail(){
          if(this.tail == null) return
          if(this.head == this.tail){
              this.head = null
              this.tail = null
              return
          }
          this.tail = this.tail.prev
          this.tail.next = null 
      }
  }
  
  class DoublyLinkedListNode {
      constructor(key,value){
          this.key = key
          this.value = value
          this.prev = null
          this.next = null
      }
      
      removeBindings(){
          if(this.prev !== null){ // if the node has perv node 
              this.prev.next = this.next
          }
          if(this.next !== null){ // if the node had next node
              this.next.prev = this.prev
          }
          this.prev = null
          this.next = null
      }
  }