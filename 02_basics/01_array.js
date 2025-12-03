const myArr = [1,5,4,8,7,62,45,1,54];

console.log(myArr[0]);

const myArr2 = new Array(1,2,1,5);

//Array methods

myArr.push(789);
console.log(myArr);
myArr.pop();  //remove last value
console.log(myArr);

console.log(myArr.includes(62));

console.log(myArr.indexOf(62));

//slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3);  //slice not manipulate original value
console.log("B", myArr);
/* output
A [ 1,  5, 4,  8, 7, 62, 45, 1, 54 ]
[ 5, 4 ]
B [ 1,  5, 4,  8, 7, 62, 45, 1, 54]
*/

const myn2 = myArr.splice(1,3); //splice manipulate original value
console.log("c", myArr);
console.log(myn2);
/* output
c [ 1, 7, 62, 45, 1, 54 ]
[ 5, 4, 8 ]
 */





