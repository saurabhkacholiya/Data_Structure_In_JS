// sort adjacent values 

const arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

bubbleSort(arr)

function swap(i,j,arr){
    const temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}

function bubbleSort(arr){
    for(let j = 0; j < arr.length; j++){
        for (let i = 0; i < arr.length - j; i++) {
            if(arr[i] > arr[i + 1]){
                swap(i,i+1,arr)
            }
        }
    }
    console.log(arr)
}