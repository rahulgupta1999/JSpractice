var a = 25;         // integer
var b = 80.5;       // floating-point number
var c = 4.25e+6;    // exponential notation, same as 4.25e6 or 4250000
var d = 4.25e-6;
var a;
var b = "Hello World!"
 
alert(a) // Output: undefined
alert(b) // Output: Hello World!

var a = null;
alert(a); // Output: null
 
var b = "Hello World!"
alert(b); // Output: Hello World!
 
b = null;
alert(b) // Output: null



var emptyObject = {};
var person = {"name": "Clark", "surname": "Kent", "age": "36"};
 
// For better reading
var car = {
    "modal": "BMW X3",
    "color": "white",
    "doors": 5
}

var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];
 
alert(colors[0]);   // Output: Red
alert(cities[2]);   // Output: New York

function createGreeting(name){
    return "Hello, " + name;
}
function displayGreeting(greetingFunction, userName){
    return greetingFunction(userName);
}
 
var result = displayGreeting(createGreeting, "Peter");
alert(result);




typeof 15;  // Returns: "number"
typeof 42.7;  // Returns: "number"
typeof 2.5e-4;  // Returns: "number"
typeof Infinity;  // Returns: "number"
typeof NaN;  // Returns: "number". Despite being "Not-A-Number"
 
// Strings
typeof '';  // Returns: "string"
typeof 'hello';  // Returns: "string"
typeof '12';  // Returns: "string". Number within quotes is typeof string
 
// Booleans
typeof true;  // Returns: "boolean"
typeof false;  // Returns: "boolean"
 
// Undefined
typeof undefined;  // Returns: "undefined"
typeof undeclaredVariable; // Returns: "undefined"
 
// Null
typeof Null;  // Returns: "object"
 
// Objects
typeof {name: "John", age: 18};  // Returns: "object"
 
// Arrays
typeof [1, 2, 4];  // Returns: "object"
 
// Functions
typeof function(){};  // Returns: "function"