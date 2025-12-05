const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);  // this used for current context
        //console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

//console.log(this);  // output is {}

//arrow function

function one(){
    let username = "ashitosh"
    console.log(this.username);  // "this" not work in function , "this" work into the object
}
one();

const chai = () =>  // this is arrow function
    {
    let username = "ashitosh";
    console.log(this); 
    }
chai();

//sysntax : () => {}

const addTwo = (num1, num2)=> (num1+num2);  //implicit , because one line argument
//when curly bracket used , then return statement is compulsary .
console.log(addTwo(3,4));

const add = (num3, num4) => ({username: "hitesh"});
console.log(add(3,4));

const myArr = [2,3,4,8,6,9,4];


