### Check example.js for below program solution
```sh 
getPermutation([1,2,3])
productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])
fibonacchi(10) 
```

### Exercise for recursion on white board (for more clearity follow below exerciese)
```sh
1. Push called Fn on stack.
2. Execute Fn body.

until...
... another fn is called:
    Pause the current execution and 
    start at step 1.
... a return is hit:
     Pop the current Fn off the stack.
     Resume executing the previous Fn.
```
### Cases to follow for creating recursion 
```sh
   1. Identify base case(s).
   2. Identify recursive case(s).
   3. Return where appropriate.
   4. Write procedures for each 
       case that bring you closer to the base  
       case(s).
```