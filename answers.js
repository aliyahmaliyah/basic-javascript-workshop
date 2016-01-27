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

//Write a function that takes two numbers and multiplies them together. 
// When I try passing something that is not a number, like "12", 12, it still multiplies the numbers together.
//If I try passing a string with letters, it returns NaN.
function multiplyNumber (number1, number2) {
    return (number1 * number2);
}
multiplyNumber(12, 12);

//Write a function that takes two numbers and a string. If the string is ‘add’, 
//then return the sum of the numbers. If the string is ‘subtract’, return the difference. 
//If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.
function someNumbers(number1, number2, string) {
    if (string === "add") {
        return (number1 + number2);
    } else if (string === "subtract") {
        return (number1 - number2); 
    }  else if (string === "mult") {
        return (number1 * number2); 
    } else if (string === "div") {
        return (number1 / number2); 
    } else {
        return (0);
        }
}
someNumbers(5, 10, "subtract");

//Write a function that takes a string and a number, and returns the 
//string repeated that many number of times.
function stringRepeat(string, number) {
    var newString = "";
    for (var i=0; i< number; i++) {
        newString += string 
    }
    return newString;
}

stringRepeat("Linguini loves avocados!", 3);

//Write a function that takes a string, and returns the reverse of that string.
function bkwdString(string) {
    return string.split("").reverse().join("");
}
bkwdString("aliyah");

//Write a function that takes a number and returns the factorial of a number.
function factorial(number) {
    var j = 1;
    for (var i=1; i <= number; i++) {
        j=j*i;
    }
    return j;
}
factorial(5);

//Write a function that takes a phrase as a string, and returns the longest word 
//in that phrase. If the phrase contains more than one such word, return the first occurrence.
function longestWord(string) {
    var newString = string.split(" ");
    var length = 0;
    var word = null;
    for (var i = 0; i <= newString.length-1; i++){
        if (length < newString[i].length) {
            length = newString[i].length;
            word = newString[i];
        }
    }
    return word;
}
longestWord("Linguini loves avocados");