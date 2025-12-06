const userEmail = "h@gmail.com"; // when "" empty variable print else statement

if(userEmail)  // only check value are available are not
{
    console.log("Got user email"); 
}
else{
    console.log("Don't have user email");   
}

/*
falsy value : false, 0, -0, BigInt 0n, "", null, undefined, NaN
Truthy value : "0", " ", 'false', [], {}, function(){}(empty function)
*/
const user = [];
if(user.length === 0)
{
    console.log("Array is empty");    
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");   
}

/*
false == 0
true
false == ''
true
0 == ' '
true
*/


/* Nullish Coalescing Operator(??) : null undefined */

let val1;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 15;
val4 = null ?? 10 ?? 20;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


/* Terniary Operator */
//syntax : condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");





