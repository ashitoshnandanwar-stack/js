
// function sayMyname(){
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("U");
// }

// sayMyname();

// function addTwoNumbers(number1, number2)  //number1 and number2 = parameters
// {
//     console.log(number1 + number2);  
// }

function addTwoNumbers(number1, number2)  //number1 and number2 = parameters
{
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(54, 65);  //54 and 65 arguments
// addTwoNumbers(54, "65"); output 5465

console.log("Result: ", result);

function loginUserMessage(username)  // when pass value default username = sam when not given amu value print default value "Sam"
{
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage());
//or
const user = loginUserMessage("ashitosh");
console.log(user);


//function with objecta and array

function calculateCartPrice(val1, val2,...num1)  //rest operator(work like array (form array))
{
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 1000));  // 200 and 400 goes to the val1 and val2

const user1 = {
    username: "Ashitosh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user1);

handleObject({
    username: "Sam",
    price: 399
})

const mynewArray = [200,400,500,700];

function returnSecondValue(getArray)
{
    return getArray[1];
}
console.log(returnSecondValue(mynewArray));
