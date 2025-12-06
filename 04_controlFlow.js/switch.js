//Switch Syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "jan";

switch(month){
    case "jan": console.log("January");
    break;
    case "feb": console.log("Febraury");
    break;
    case "mar": console.log("March");
    break;
    case "april": console.log("April");
    break;
    default: console.log("invalid choice");
    break; 
}

//When break is now write, then after condition satisfied all condition are print except default.