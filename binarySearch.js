function binarySearch(arr,item){
    let min = 0
    let max = arr.length -1 
    let guess 

    while(min <= max){
        guess = Math.round((min + max)/2)
        if(arr[guess] == item){
            return guess
        }else{
            if(arr[guess] < item){
                min = guess + 1 
            }else{
                max = guess - 1
            }
        }
    }

    return -1
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73],71))
