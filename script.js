    // function getInput()
    // {
    //   // Get input from the text field
    //   let input = document.getElementById('email').value;
    //   // Run the value: here we just display it
    //   if (input === '')
    //   {
    //     alert("Please Enter the value")
    //     // document.getElementById('output').textContent = "Please enter a value!";
    //   } 
    //   else
    //   {
    //     document.getElementById('output').textContent = "You entered: " + input;
    //     console.log("User input: " + input); // You can also process this further
    //   }
    // }
    console.log("Hello,World")
    var a = "Hello";
    var b = 10;
    console.log(a+b);
    console.log(typeof a,typeof b);
    const myobj = {value:42};
    myobj.value = 200;
    console.log(myobj);
    myobj.name = "Trump";
    console.log(myobj);
    // Creating a word-meaning dictionary
const dictionary = {
    "JavaScript": "A high-level, interpreted programming language commonly used for web development.",
    "HTML": "The standard markup language for creating web pages.",
    "CSS": "A style sheet language used for describing the look and formatting of a document written in HTML.",
    "Variable": "A container used to store data values.",
    "Function": "A block of code designed to perform a particular task when called."
};

// Displaying the dictionary
// console.log("Word-Meaning Dictionary:");
// for (let word in dictionary) {
//     console.log(`${word}: ${dictionary[word]}`);
// }
console.log(dictionary["HTML"]);

let age = 18;
let message = (age>=18) ? 'You can Drive' : 'You can not Drive';
console.log(message);
let num = -2;
let output = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log(output);
let a1 = null;
let b1 = 345;
let c = true;
let d = BigInt("567");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a1,b1,c,d,e,f,g);
console.log(typeof a1,typeof b1,typeof c,typeof d,typeof e,typeof f,typeof g);
const item =
{
    "Harry":true,
    "shubh":false,
    "Lovish":67,
    "Rohan": undefined
}
console.log(item['Harry'],item['shubh'],item['Lovish'])