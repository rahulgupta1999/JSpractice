var x = 5; 
var name = 'string'; 

var name = "Harsh";
name = "Rakesh";


var num = 5;

// store string in the variable num now not non-num
num = "GeeksforGeeks";

let a = 'hello'; // globally scoped
var b = 'world'; // globally scoped
console.log(window.a); // undefined
console.log(window.b); 


var a = 'hello';
var a = 'world'; // No problem, 'hello' is replaced.
let b = 'hello';
let b = 'world'; // SyntaxError: Identifier 'b' has already been declared


const name = 'Rahul';
name = 'Mayank'; // will give Assignment to constant variable error.




let globalVar = "This is a global variable";
 
function fun() {
  let localVar = "This is a local variable";
 
  console.log(globalVar);
  console.log(localVar);
}
 
fun();
console.log(globalVar);
console.log(localVar);// will show error

