/* for */

/*
for (let index = 0; index <= 10; index++) 
{
    const element = index;
    if(element == 5){
        console.log("5 is best number"); 
    }
    console.log(element);
}
*/

/*
for (let i = 0; i <= 10; i++) 
{
    console.log(`Outer loop value ${i}`);
    for(let j=0; j <= 10; j++)
    {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }  
}
*/

/*
for (let i = 1; i <= 10; i++) 
{
    console.log(`Outer loop value ${i}`);
    for(let j=1; j <= 10; j++)
    {
        console.log(i + '*' + j + ' = ' + i*j ); 
    }  
}
*/

/*
let myArr = ["Flash", "Batman", "Superman"];
console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}
*/


/* Break and Continue */

// for (let index = 1; index <= 20; index++) 
// {
//     if(index == 5)
//     {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) 
{
    if(index == 5)
    {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}