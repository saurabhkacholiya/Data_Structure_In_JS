powerset( [1, 2, 3])

function powerset(arr){
    const subset = [[]]
    for(const ele of arr){
        const length = subset.length
        for(let i = 0 ; i < length; i++){
            const currentSubset = subset[i]
            subset.push(currentSubset.concat(ele))
        }
    }
    console.log(subset)
}