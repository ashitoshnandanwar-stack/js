# js
A code repo for javascript

# js execute context
{} -> Global execution context(in browser 'this' is window function)
1.Global execution context
2.Function execution context
3.Eval execution context

{} -> memory creation phase, execution phase

eg. 
let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1+num2;
    return total;
}
let result1 = addNum(val1, val2);
le result2 = addNum(10,5);

# step of execution:
- Global execution -> this
- memory creation phase
    val1 -> undefined
    val2 -> undefined
    addNum -> defination
    result1 -> undefined
    result2 -> undefined
- execution phase
    val1 -> 10
    val2 -> 5
    addNum -> new variable environment + execution thread  -> memory phase and execution phase occur

