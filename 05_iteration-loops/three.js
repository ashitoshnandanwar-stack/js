/* for of loop */

// ["", "", ""]
// [{}, {}, {}]

/*
const arr = [1,2,3,4,5];
for (const num of arr) 
{
    console.log(num);
}
*/

/*
const greetings = "Hello world!"
for (const greet of greetings) 
{
    if(greet == " ")
    {
        console.log("Space consist");
        break;
    }
    console.log(`Each char is ${greet}`);
}
    */


/* Map */

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

console.log(map);
//console.log(typeof(Map));  --- output

for (const [key, value] of map) {
    console.log(key, ':-' , value);
    
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

//for of not work on object


