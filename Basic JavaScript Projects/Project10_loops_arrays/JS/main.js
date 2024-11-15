//WHILE LOOPS//
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//LENGTH PROPERTY -- The length property returns the length of a string.//
function Length_method() {
    let text = "Hello World!";
    let length = text.length;

document.getElementById("len").innerHTML = length; //returns 12//
}

//FOR LOOPS IN JAVASCRIPT//

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//DOCUMENT.GETELEMENTBYID().INNERHTML ASSIGNMENT//
function array_function() {
    var instument = [];
    instument[0] = "Guitar";
    instument[1] = "Drums";
    instument[2] = "Piano";
    instument[3] = "Bass";
    instument[4] = "flute";
    document.getElementById("Array").innerHTML = "Joey plays the " + instument[2] + "!";
}


//CONST KEYWORD ASSIGNMENT//
function constant_function() {
    const instument = {type: "guitar", brand: "Fender", color: "black"};
    instument.type = "guitar";
    instument.price = "$1000";
    instument.color = "black"
    document.getElementById("Constant").innerHTML = "The cost of the " + instument.color + "<br>" + instument.type + " is " + instument.price;
}

//LET KEYWORD ASSIGNMENT//
//not sure how to not get it to stop popping up in 3 different spots on the page...//
var X = 82;
document.write (X);
{
    let X = "33";
    document.write ("<br>" + X);
}
document.write ("<br>" + X);

//RETURN STATEMENT - stops the execution of a function and returns a value.//
function myMath(){
function Maths() {
    return Math.PI;
  };
  document.getElementById("math").innerHTML = Maths();
}

  //OBJECT ASSIGNMENT//
  function cars() {
  let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year  + this.color + this.make + this.model;
    }
  };
  document.getElementById("Car_Object").innerHTML = car.description();
  }

  //***BREAK AND CONTINUE CHALLENGE***//
//BREAK statement - breaks out of a switch or a loop. also have seen used as "<br>"//
//In a switch, it stops the execution of more code inside the switch.//
//In in a loop, it stops loop and continues executing the code after it.//
//*used in several previous examples*//

//CONTINUE - breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.//
function demo() {
    let text = "";
    for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
}