//Questions

//Q: Define the term operator and explain what their purpose is in JavaScript.
//A: JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more.
//Q: Please list the five primitives types in JavaScript.
//A: According to the mozilla site there are six primitive types, although I think we went over four in class: number, string, boolean, undefined, null, symbol
//Q: Take a look at the table below and identify the primitive types next to each one.
      45	//number
      "I heart JS" 	//string
      'Pizza is life'	//string
      3.14	//number
      true	//boolean
      " "	 //undefined
      false	 //boolean
      '5,5555' //this is written as a string but depending on the expression JavaScript might treat it as a number
//Q: Write a short sentence explaining how expressions work and why they are useful in JavaScript.
//A: An expression is any valid unit of code that resolves to a value.


/*=========================================================
    Part 1: Variables
    Exercise 1
*/
var givenName;
console.log(givenName);
// Q: What value is stored in `givenName` right now?
// A: none, it is currently undefined


givenName = "Brett";
console.log(givenName);
// Q: What is `givenName` set to now?
// A: Brett


givenName = givenName;
console.log(givenName);
// Q: What is `givenName` set to now?
// A: Brett

/*=========================================================
    Exercise 2
*/
var givenName = "Brett";
var greeting = ("Hello, how are you " + givenName + "?");
console.log(greeting);

/*=========================================================
     Part 2: Simple Math
     Exercise 3
*/
var high = 50;
var low  = 10;


var math = high - low;
console.log(math);
// Q: What is `math` set to?
// A: 40

math = high - "5";
console.log(math);
// Q: What is `math` set to?
// A: 45


// Using the `high` & `low` Variables, work through each of the 4 math operators below and log the answers to the console.
// Write Code Below:
math = low - high;
console.log(math);

math = high + low;
console.log(math);

math = high / low;
console.log(math);

math = high * low;
console.log(math);

/* =========================================================
     Part 3: Expressions
     Exercise 4
*/


// Create a variable to calculate your age
// The answer should read "NAME is XX years old"
// The answer should not be written in a comment.
var born = 1900;
var today = 1900;

// Answers Below:
born = 1982;
today = 2017;
var name = "Katy";
var age = (today - born);
console.log(name + " is " + age + " years old");


// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:
yourName = "Katy";
instructorName = "Tori";


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log(statement);


/* =========================================================
     Exercise 5
*/
var age = 45;

if (age > 100) {
   var isOld = true;
} else var isOld = false;
   console.log(isOld);


   /* =========================================================
        Exercise 6
   */
var firstName = "Julia "; // error: need to add space after Julia
var lastName = "Roberts";
var fullName = firstName + lastName; // error: lastname should be lastName

console.log(fullName); // Julia Roberts

var yearBorn = 1975;
var currentYear = 2016;
var age = currentYear - yearBorn; // error: Var should be var

console.log(age); // 41
