let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
console.log(length);

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part);  //Banana

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newtext);  

let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();  
console.log(text2) //HELLO WORLD!
console.log(text3) //hello world!


let text4 = "Hello";
let text5 = "World";
let text6 = text4.concat(" ", text5);
console.log(text6);
text7 = "Hello" + " " + "World!";
console.log(text7)


let t = "      Hello World!      ";
let t2 = t1.trim();
console.log(t2) //remove spaces from t1


let text10 = "HELLO WORLD";
let char = text10.charAt(0);
console.log(char)
let no = text10.charCodeAt(0);
console.log(no) //returns ascci value of char at 0


let e = "a,b,c,d,e,f";
const myArray = e.split(",");
console.log(myArray[0]);


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


function convertCases(str)
{

    console.log(str.replaceAll(" ", "").toUpperCase()); // UPPERFLATCASE
arr=str.split(" ");
resultCamel=""
        
for (i=0; i<arr.length; i++) {
    if (i == 0) {
        // getting first index and making it lowecase
        resultCamel+= arr[i].toLowerCase()
    } else {
        // getting first index and making it uppercase
        a = arr[i].charAt(0).toUpperCase()

        // getting rest of String and making it lowercase 
        b= arr[i].slice(1).toLowerCase()

        // joining both strings
        resultCamel += (a+b)
    }
}
console.log("cammel case"+resultCamel);

resultPascal=""
for (i=0; i<arr.length; i++) {
   
    
        // getting first index and making it uppercase
        a = arr[i].charAt(0).toUpperCase()

        // getting rest of String and making it lowercase 
        b= arr[i].slice(1).toLowerCase()

        // joining both strings
        resultPascal += (a+b)
    
}
console.log("Pascal string "+resultPascal)


result_macro=""

        
for (i=0; i<arr.length; i++) {
    
        // getting first index and making it uppercase
        

        // getting rest of String and making it lowercase 
        b= arr[i].slice(1).toLowerCase()

        // joining both strings
        result_macro = (result_macro+"_"+b.toUpperCase())
    
}
console.log("MACRO_CASE "+result_macro)


camel_snake_case_result=""

for (i=0; i<arr.length; i++) {
    if (i == 0) {
        // getting first index and making it lowecase
        camel_snake_case_result+= arr[i].toLowerCase()
    } else {
        // getting first index and making it uppercase
        a = arr[i].charAt(0).toUpperCase()

        // getting rest of String and making it lowercase 
        b= arr[i].slice(1).toLowerCase()

        // joining both strings
        camel_snake_case_result+= "_"+(a+b)
    }
}
console.log("Camel snake case :" +camel_snake_case_result)

}