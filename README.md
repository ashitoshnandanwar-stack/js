# js
A code repo for javascript

# js execute context
{} -> Global execution context(in browser 'this' is window function)
1.Global execution context
2.Function execution context
3.Eval execution context

{} -> memory creation phase, execution phase

eg. 
let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1+num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10,5);

# step of execution:
- Global execution -> this
- memory creation phase
    val1 -> undefined
    val2 -> undefined
    addNum -> defination
    result1 -> undefined
    result2 -> undefined
- execution phase
    val1 -> 10
    val2 -> 5
    addNum -> new variable environment + execution thread  -> memory phase and execution phase occur

| Keyword | Scope    | Can Redeclare | Can Reassign |
| ------- | -------- | ------------- | ------------ |
| `var`   | Function | Yes           | Yes          |
| `let`   | Block    | No            | Yes          |
| `const` | Block    | No            | No           |

| Scope    | Description              |
| -------- | ------------------------ |
| Global   | Accessible everywhere    |
| Function | Inside function only     |
| Block    | Inside `{}` (let, const) |

| Method          | Use                  |
| --------------- | -------------------- |
| `length`        | String length        |
| `toUpperCase()` | Convert to uppercase |
| `toLowerCase()` | Convert to lowercase |
| `indexOf()`     | Find position        |
| `slice()`       | Extract part         |
| `replace()`     | Replace text         |
| `trim()`        | Remove spaces        |

## Methods of array
| Method      | Use                |
| ----------- | ------------------ |
| `length`    | Number of elements |
| `push()`    | Add at end         |
| `pop()`     | Remove last        |
| `shift()`   | Remove first       |
| `unshift()` | Add at start       |
| `slice()`   | Extract            |
| `splice()`  | Add/remove         |
| `sort()`    | Sort array         |
| `reverse()` | Reverse            |

## Main Difference Between slice() and splice() in JavaScript
| Feature            | `slice()`               | `splice()`                         |
| ------------------ | ----------------------- | ---------------------------------- |
| **Purpose**        | Extracts elements       | Adds / removes / replaces elements |
| **Original array** |  **Not modified**       |  **Modified**                      |
| **Return value**   | New array (copied part) | Array of removed elements          |
| **Parameters**     | `start, end`            | `start, deleteCount, items...`     |
| **Use case**       | Copy or get sub-array   | Change the array content           |

##### Example of slice(not destructive)
```
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(1, 4);

console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5]
```
##### Example of splice (destructive)
```
let arr = [1, 2, 3, 4, 5];
let result = arr.splice(1, 2);

console.log(result); // [2, 3]
console.log(arr);    // [1, 4, 5]
```
- typeof of array = object
- Best loop for iteration of array = foreach

### typeof Operator – All Common Options
| Value / Expression  | Code Example          | `typeof` Output |
| ------------------- | --------------------- | --------------- |
| **Number**          | `typeof 10`           | `"number"`      |
| **Floating number** | `typeof 10.5`         | `"number"`      |
| **BigInt**          | `typeof 10n`          | `"bigint"`      |
| **String**          | `typeof "hello"`      | `"string"`      |
| **Boolean**         | `typeof true`         | `"boolean"`     |
| **Undefined**       | `typeof undefined`    | `"undefined"`   |
| **Null**            | `typeof null`         | `"object"`      |
| **Object**          | `typeof {}`           | `"object"`      |
| **Array**           | `typeof []`           | `"object"`      |
| **Function**        | `typeof function(){}` | `"function"`    |
| **Arrow function**  | `typeof (() => {})`   | `"function"`    |
| **Symbol**          | `typeof Symbol("id")` | `"symbol"`      |
| **NaN**             | `typeof NaN`          | `"number"`      |
| **Date object**     | `typeof new Date()`   | `"object"`      |
| **RegExp**          | `typeof /abc/`        | `"object"`      |

- AJAX is a technique used to send and receive data from a server asynchronously without reloading the entire web page.

| Event        | Purpose      |
| ------------ | ------------ |
| click()      | Mouse click  |
| dblclick()   | Double click |
| keydown()    | Key pressed  |
| mouseenter() | Mouse enters |
| submit()     | Form submit  |

