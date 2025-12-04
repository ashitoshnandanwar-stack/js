const tinderUser = new Object()

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Ashitosh",
            lastname : "Nandanwar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//concanitate object
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2) // first method
console.log(obj3);

const obj4 = {...obj1, ...obj2}  // other method
console.log(obj4);


const users = [
    {
        id:1,
        email:"h@gamil.com"
    }
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // most imp (get keys)
console.log(Object.values(tinderUser)); //get values
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check it is property are present or not



