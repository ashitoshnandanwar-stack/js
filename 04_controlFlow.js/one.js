// if statement

const isUserLoggedIn = true;  // "=" assignment operator
if(2 == "2")  // only value check
{
    console.log("Executed");  
}

if(2 === "2")  // here value and type also check
{
    console.log("Executed");  
}
//comparision operator = <, >, <=, >=, ==, === 

const temperature = 51;
if(temperature < 50)
{
    console.log("less than 50");  
}
else{
    console.log("Temperature is greater than 50");
}

const score = 200;
if(score > 100)
{
    let power = "fly";  // var has globally accepted
    console.log(`User power: ${power}`); 
}
//console.log(`User power: ${power}`); 

 const balance = 1000;
// if(balance> 500) console.log("Test"),
// console.log("test2");

if(balance < 500)
{
    console.log("less than 500");
}
else if(balance < 750)
{
    console.log("less than 750");
  
}
else if(balance < 900)
{
    console.log("less than 900"); 
}
else{
    console.log("less than 1200");
}

//check multiple condition
const UserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(UserLoggedIn && debitCard)
{
    console.log("Allowed to buy");  
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("User logged in"); 
}