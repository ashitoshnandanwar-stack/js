let myDate = new Date();
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2023, 10, 23);
console.log(myCreatedDate.toDateString());

let dated = new Date("2023-01-14");
console.log(dated.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.round(Date.now()/1000));


let newDate = new Date();

console.log(newDate.getDate());
console.log(newDate.getFullYear());

console.log();

newDate.toLocaleString('default',{
    weekday:"long"
})













