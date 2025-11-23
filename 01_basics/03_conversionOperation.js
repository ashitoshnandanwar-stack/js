let score = "33abs";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);  // string score variable convert into number
console.log(typeof valueInNumber);
console.log(valueInNumber);  //NaN = string do not convert into number show NaN

//"33" => 33
// "33abc" => Nan
// true => 1; false => 0


let isLoggedIn = "a";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
//"" => false
//"a" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);