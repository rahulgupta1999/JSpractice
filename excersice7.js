let x = Math.random(); //generate random no
a=Number("3.14")    // returns 3.14
console.log(a)
a=Number(" ")       // returns 0
console.log(a)
a=Number("")        // returns 0
console.log(a)
a=Number("99 88")  //Nan


b="12.3" //string of value 12.3
b=parseFloat(b) // b is now float having value 12.3
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
a = 12.22
console.log(parseInt(a)) //a=12

a = 12.22
Math.floor(a)

x=24
y=String(x)         // returns a string from a number variable x
y=String(123)       // returns a string from a number literal 123
y=String(100 + 23)  // returns a string from a number from an expression


z=x.toString()
z=(123).toString()
z=(100 + 23).toString()
function randomInt() {
    return (((new Date()).getMilliseconds())/5).toFixed(0)
}
function randomFloat(precision) {
    return (((new Date()).getMilliseconds())/8).toFixed(precision)
}