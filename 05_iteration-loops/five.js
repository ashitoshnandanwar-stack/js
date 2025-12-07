const coding = ["js", "rb", "py", "java", "cpp"];

// coding.forEach( function (item){
//     console.log(item);
    
// });   


// coding.forEach((val) => {
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const mycoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    }
]
mycoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFile);
    console.log(item); 
})


// In JavaScript, forEach() is used to run a function for every element in an array.
// It makes it easy to loop through arrays without writing a traditional for loop.

// Callback meaning (simple explanation):
// A callback is a function that you pass into another function, and that function will call it later when its job is done.
// It's like saying: “When you finish, call me back with the result.”