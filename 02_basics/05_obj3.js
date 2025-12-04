//destructuring of object

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
};

const {courseInstructor : insturctor} = course; //destructure

console.log(insturctor);

//Api
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price":"free"
// }
