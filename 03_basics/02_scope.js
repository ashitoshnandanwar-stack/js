//scope

var c = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
//console.log(a);
//console.log(b);
console.log(c);  //var are work outside scope because of that not used

//outside the scope(global) are accept in scope but in scope not accept in outside the scope

//Nested scope

function one(){
    const username = "ashitosh";
    function two(){
        const website = "youtube";
        console.log(username);   
    }
    //console.log(website);  error occur outside the scope
    two();  
}
one()

if(true){
    const username = "Ashitosh";
    if(username === "Ashitosh"){
        const website = " youtube";
        console.log(username + website);  
    }
    //console.log(website); error outside the scope
    
}
//console.log(username);  error outside the scope
console.log("--------------------------------------------------");

//++++++++++++++interesting++++++++++++++++++++++++++++++++//

console.log(addone(5));  // in this case used before the declaration
function addone(num){
    return num + 1;
}

//addTwo(5);  // in expression not allowed to used before the expression
const addTwo = function(num)  //this known as expression, variable that hold function
{
    return num + 2;
}
console.log(addTwo(5));

