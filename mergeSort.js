// slice method does not include the last given index 
// eg -> arr = [1,2,3,4]
// arr.slice(0,3) -> it will start from arr[0] and end on arr[2] --> output [1,2,3]
// and if arr.slice(3) so it will start form the given index -->  output [4]
// o(n log n) because we are always dividing array in half
const arr = [8, 5, 2, 9, 5, 6, 3]


console.log('input ', arr)
console.log('output ',mergeSort(arr))

function mergeSort(arr) {
      if(arr.length == 1 ) return arr
      const middle = Math.round(arr.length/2)
      const left = arr.slice(0,middle)
      const right = arr.slice(middle)
      const sortedLeft = mergeSort(left)
      const sortedRight = mergeSort(right)
      return merge(sortedLeft,sortedRight)
  }
  
  function merge(left,right){
      const result = []
      let leftIndex = 0
      let rightIndex = 0
      while(leftIndex < left.length && rightIndex < right.length){
          if(left[leftIndex] < right[rightIndex]){
              result.push(left[leftIndex])
              leftIndex++
          }else{
              result.push(right[rightIndex])
              rightIndex++
          }
      }
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  }

