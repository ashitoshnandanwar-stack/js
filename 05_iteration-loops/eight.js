const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc : ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)  // acc(accumulator initial value)

const myTotal = myNums.reduce((acc, currVal)=> acc + currVal,0)  // using arrow function
console.log(myTotal);



const shoppingCart = [
    {
        itemName : "JS course",
        price : 299
    },
    {
        itemName : "Python",
        price : 199
    },
    {
        itemName : "Data Science",
        price : 1299
    },
    {
        itemName : "Java",
        price : 599
    }
]
const total = shoppingCart.reduce((acc, item) => acc + item.price ,0 )
console.log(total);

