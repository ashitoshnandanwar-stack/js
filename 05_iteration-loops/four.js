
// const myObject = {
//     js : "javascript",
//     cpp : "c++",
//     rb : "ruby",
//     swift : "swift by apple"
// }

// //for in loop
// for (const key in myObject) 
// {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"];
// for (const key in programming) 
// {
//     console.log(programming[key]);
    
// }

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

for (const key in map) {
  console.log(map[key]);
}

//for in loop not work on map
//for object used forin loop