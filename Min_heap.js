/*

Min Heap 

i -> current index 
child One -> 2*i + 1
child Two -> 2*i + 2
Parent Node -> Math.floor((i - 1)/2)

- sift up

- sift down

- Insertion :- first add the value at the last of the array and then keep checking
the with parent and apply sift up 

- Remove :- swap the first value with the last value and pop the value and 
call sift down value 

- build heap 

- Time Complexity  
    - sift down :- O(log n)  // where n is number of element in array 
    - sift up :- O(log n)  // where n is number of element in array 
    - insertion :- O(log n)  // where n is number of element in array 
    - removal :- O(log n)  // where n is number of element in array 
    - Build Heap:- O(n) while using sift down  // where n is number of element in array 
                :- O(n log n) while using sift up  // where n is number of element in array 
*/


function MinHeap(array){
    this.buildHeap = function(array){
        let firstParentIndex = Math.floor((array.length - 2)/2)
        for(let currentIndex = firstParentIndex; currentIndex >= 0; currentIndex--){
            this.siftDown(currentIndex,array.length -1,array)
        }
        return array
    }
    this.peek = function(){
        return this.heap[0]
    }
    this.siftDown = function(currentIndex,endIndex,heap){
       let childOneIndex =  2 * currentIndex + 1
       let indexToSwap = null // for now
       while(childOneIndex <= endIndex){
            let childTwoIndex =  2 * currentIndex + 2 <= endIndex 
                            ? 2 * currentIndex + 2
                            : -1 
            if(childTwoIndex !== -1 && heap[childTwoIndex] < heap[childOneIndex]){ // for max-heap heap[childTwoIndex] > heap[childOneIndex]
                indexToSwap = childTwoIndex
            }else{
                indexToSwap = childOneIndex
            }

            if(heap[indexToSwap] < heap[currentIndex]){ // for max-heap heap[indexToSwap] > heap[currentIndex]
                this.swap(currentIndex,indexToSwap,heap)
                currentIndex = indexToSwap
                childOneIndex = currentIndex * 2 + 1
            }else{
                break
            }
       }
    }
    this.remove = function(){
        const firstIndex = 0
        const lastIndex = this.heap.length - 1 
        this.swap(firstIndex,lastIndex,this.heap)
        const valueToRemove = this.heap.pop()
        const lastIndexAfterPop = this.heap.length - 1 
        this.siftDown(firstIndex,lastIndexAfterPop,this.heap)
        return valueToRemove
    }
    this.siftUp = function(currentIndex, heap){
        let parentIdx = Math.floor((currentIndex -1)/2)
        while(currentIndex && heap[currentIndex] < heap[parentIdx]){ // in max heap heap[currentIndex] > heap[parentIdx]
            this.swap(currentIndex,parentIdx,heap)
            currentIndex = parentIdx
            parentIdx = Math.floor((currentIndex -1)/2)
        }
    }
    this.insert = function(value){
        //add the value at the very end 
        this.heap.push(value)
        const index = this.heap.length - 1 
        this.siftUp(index,this.heap)
    }
    this.swap = function(i,j,heap){
        const temp = heap[j]
        heap[j] = heap[i]
        heap[i] = temp
    }
    this.heap = this.buildHeap(array)
}

const input =  [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]

let minHeapObj = new MinHeap(input)

let count = 3
let thirdSmallestValue = null

while(count){
    thirdSmallestValue = minHeapObj.remove()
    count--
}

console.log('thirdSmallestValue is ', thirdSmallestValue)
