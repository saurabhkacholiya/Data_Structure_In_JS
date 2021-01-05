// Take list of houses
// find starting point - Math.min
// find maxHouse = Math.max
// find mid point - starting point + k
// find end point - mid point + k
// find starting point of the next chunk - end point + 1
// repeat steps 4 to 6 till end point becomes greater than or equal to maxHouse

// Complete the hackerlandRadioTransmitters function below.

const arr = [7 ,2 ,4 ,6 ,5 ,9 ,12 ,11 ]

hackerlandRadioTransmitters(arr,2)

function hackerlandRadioTransmitters(arr, k) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let spt = min 
    let midPoint, ept = 0
    let numberOfTransmitter = 0
    while(ept <= max){
        midPoint = getMidPoint(arr,spt)
        let endPoint = midPoint + k
        numberOfTransmitter += 1
        if( endPoint >= max) break
        spt = getEndPoint(arr,endPoint + 1)
    }

    return numberOfTransmitter
}

function getMidPoint(x,mpt){
    const min = Math.min(...x)
    while(!x.includes(mpt) && mpt > min){
        mpt -= 1
    }
    return mpt
}

function getEndPoint(x,mpt){
    const max = Math.max(...x)
    while(!x.includes(mpt) && mpt < max){
        mpt += 1
    }
    return mpt
}
