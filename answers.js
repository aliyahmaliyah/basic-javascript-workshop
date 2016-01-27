//These are my answers for the functions excercises 27/01/16

//Write a function that takes a string and returns the first character of the string.
function FirstLetter(string){
    return (string.charAt(0));
}
FirstLetter("I like coffee.");
FirstLetter("");
FirstLetter("Linguini likes avocados!");

//Write a function that takes a string and returns the last character of a string.
function lastLetter(string) {
    return (string.charAt(string.length - 1));
}
lastLetter("I like coffee.");
lastLetter("");
lastLetter("Linguini likes avocados!");

//Write a function that takes a string and a number, and returns the character 
//at the position represented by the number. The indexing of number should start at 0. 
function letterIndex(number, string) {
    return (string.charAt(number-1));
}
letterIndex (4, "Linguini likes avocados!");

//Write a function that takes two numbers and adds them together. 
//When I try passing something that is not a number, like "12", 31, it treats 
//them like strings and combines the strings to make "1231"
function addNumber (number1, number2) {
    return (number1 + number2);
}
addNumber(12, 31);
