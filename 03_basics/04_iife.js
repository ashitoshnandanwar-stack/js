//Immediately invoked function expression(IIFE)

(function chai()  //name iife
{
    console.log(`DB CONNECTED`);  
})();

//syntax ()() first is function, second is execution

((name)=>  // without name iife
{
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");