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