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
