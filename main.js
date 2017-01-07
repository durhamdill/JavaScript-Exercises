/*=========================================================
    Part 1: Variables
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
