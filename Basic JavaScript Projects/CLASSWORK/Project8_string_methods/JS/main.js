//***JAVASCRIPT METHODS***//
//concat() method//
function Concat() {
    var A = "Cats";
    var B = " and ";
    var C = "dogs";
    var whole_sentence = A.concat(B,C);
    document.getElementById("Concat").innerHTML = whole_sentence;
}

//slice() method//
function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML = section;
}

function slicing() {
    var sentence = "I said a hip hop the hippie to the hippie to the hip hip hop and you don't stop.";
    var section = sentence.slice(42, 80);
    document.getElementById("slicing").innerHTML = section;
}

//toUpperCase() method -- onverts a string to uppercase letters.//
function mousedown() {
    let text = "click here to make me all uppercase.";
    let result = text.toUpperCase();
    document.getElementById("uppercase").innerHTML = result;
}

//search() method -- searches a string for a value and returns the position of the first match//
function search() {
    let text = "The word blue is number:"
    let position = text.search("blue");

document.getElementById("search").innerHTML = position;
}

//NUMBER METHODS//
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
}

//toPrecision() method -- formats number to a specified length//
function Precision() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed() method --  converts a number to a string and ounds the string to a specified number of decimals.//
function fixed() {
    let num = 5.56789;
    let n = num.toFixed();
    document.getElementById("demo").innerHTML = n;
} //returns 6//

//valueOf() method -- returns primitive value of a string, does not change original string, and can be used to convert a string object into a string.//
function value_Of() {
    let text = "Hello World!";
    let result = text.valueOf();
    document.getElementById("value_of").innerHTML = result;
}