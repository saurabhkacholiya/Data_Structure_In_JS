function log(output){
    console.log('output si ', output)
}

function simpleRecursion(max,current){
    if(max < current) return
    console.log('--> ', current)
    simpleRecursion(max,current+1);
} 

function fibonacchi(n){
    if(n == 1 || n == 0) return 1
    return fibonacchi(n - 1) + fibonacchi(n - 2)
}

function factorial(number){
    if(!number){
        return 1
    }else {
        return number * factorial(n - 1)
    }
}

log(factorial(5))