// getPermutation([1,2,3])
// productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])
// fibonacchi(10)


function productSum(array,multipler = 1) { 
    let sum = 0
	array.forEach(item => {
		if(Array.isArray(item)){
			sum += productSum(item,multipler + 1)
		}else{
			sum += item
		}
	})
	return sum * multipler
}


function fibonacchi(n){
	if(n == 1) return 0
	if(n == 2) return 1
	return fibonacchi(n - 2) + fibonacchi(n -1)
}


function swap(i,j,array){
	temp = array[i]
	array[i] = array[j]
	array[j] = temp
}

function permutationHelper(i,arr,permutation){
	if(i === arr.length -1){
		permutation.push(arr.slice())
	}else{
		for(let j = i ; j < arr.length ; j++){
			swap(i,j,arr)
			permutationHelper(i + 1, arr, permutation)
			swap(i,j,arr)
		}
	}
}

function getPermutation(arr){
	let permutation = []
	permutationHelper(0,arr,permutation)
	return permutation
}


