//***LOCAL AND GLOBAL VARIABLE ASSIGNMENT***//
//Write a global variable.//
var X = 5;
function Add1() {
    document.write(20 * X);
}
function Add2() {
    document.write (30 - X);
}
Add1();//returns 100//
Add2();//returns25//

//Write a local variable.//
function Add3() {
    var Y = 10
    document.write(20 * Y);
}
function Add4() {
    var Y = 30
    document.write (30 - Y);
}
Add3();//returns 200//
Add4();//returns 0//

//Intentionally write a function with an error in it and use console.log() method to debug it within the console in Chrome Dev Tools.//
function Add5() {
    var Z = 5
    console.log(20 / Z);
}
function Add6() {
    console.log(30 - Z);
}
Add5();//returns 4//
Add6();//returns "ReferenceError: Can't find variable: Z"//

//*** CONDITIONAL STATEMENTS IN JAVASCRIPT ***/
//IF statements//
function get_Date() {
   if (new Date().getHours() < 12) {
    document.getElementById("Greeting").innerHTML = "Good morning!";
   }
   if (new Date().getHours() > 12) {
    document.getElementById("Greeting").innerHTML = "Good afternoon!";
   }
}

function hello() {
    if (5 < 10) {
    document.write("Hello World!");
    }
}

//ELSE statements//
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You can vote!"
    }
    else {
        Vote = "You're not old enough."
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//ELSE IF statements//
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It's afternoon!";
    }
    else {
        Reply = "It's evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}