//singleton
//Object.create


//object literals

const mySym = Symbol("key1");

const jsUser = {
    name : "Ashu",
    location : "jaipur",
    "full name" : "Ashitosh Nandanwar",
    [mySym] : "mykey1",
    email : "ashitoshnandanwar@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
};

console.log(jsUser.email);

console.log(jsUser["email"]);
console.log(jsUser["full name"]);

console.log(jsUser[mySym]);

jsUser.email = "ashunandanwar@gmail.com";
//Object.freeze(jsUser);   // freeze object ...not update

jsUser.email = "ashinanda@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());





