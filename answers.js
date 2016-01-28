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

//Write a function that takes a phrase, and returns the same phrase with every word capitalized. 
//For example, if you pass your function "hello world", it should return “Hello World” and if 
//you pass it “HELLO WORLD” or even "HeLLo WoRLD", it will also return "Hello World".
function capitalize(string) {
    var result = [];
    var arr = string.split(" ");
    for (var i=0; i < arr.length; i++){
        var newWord= arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase();
        result.push(newWord);
}
    return result.join(" ");
}
capitalize("hEllo wOrld");

//Write a function that takes an array and returns the largest number of the array.
var myArray = [2,4,80,15,30];
var largest = myArray[0];

function bigNumber(myArray) {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i] > largest){
            largest = myArray[i];
        }
    }
            return largest;
}
bigNumber(myArray);

//Write a function that takes an array, and returns a filtered array. 
//The filtered array should only contain the truthy values from the initial array.
function findTruthy(array) {
    var truthy = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            truthy.push(array[i]);
        }
    }
    return truthy;
}
var myArray = [0,"0","happy",-14,9];
findTruthy(myArray);

//Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.
var arr = [2,24,12];
var total=0;

function sum(array) {
    for(var i = 0; i < array.length; i++){ 
        total += array[i]; }
    return total;
}
sum(arr);

//Write a function that takes two arrays, and returns an array of all elements that are only in one array.
var myArray = [2,4,6,8]
var yourArray = [4,6,8,12]
function newArray(array1, array2) {
    var combined = [];
    for (var i=0; i < array1.length; i++) {
        
        if (array2.indexOf(array1[i]) === -1) {
            combined.push(array1[i]);
        }
    }
    for (var j=0; j < array2.length; j++) {
        if (array1.indexOf(array2[j]) === -1) {
            combined.push(array2[j]);
        }
    }
    return combined;
}
newArray(myArray, yourArray);

//Mini Challenge: write a function that takes an array and a function as arguments. 
//The function should return a new array that maps every element of the input array
//by passing it through the function you received.

function arrayMap(array, fn) {
    var myArray = [];  
    for (var i = 0; i < array.length; i++) {
        myArray.push(fn(array[i]));
    }
    return myArray;
}
function add1(n){
    return n+1;
}
console.log(arrayMap([1,2,3,4,5], add1));