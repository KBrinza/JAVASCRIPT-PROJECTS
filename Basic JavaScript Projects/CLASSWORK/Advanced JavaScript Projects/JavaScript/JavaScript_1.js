//SWITCH STATEMENT//
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("color_input").value;
    var Color_String = " is a great color!"
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written in the list above.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

   //Window Object --The window object represents an open window in a browser. //
    // ex: If a document contain frames (<iframe> tags), the browser creates one window object for the HTML document, and one additional window object for each frame.//
//window open/close//
let myWindow;

function openWin() {
  myWindow = window.open("", "myWindow", "width=400,height=200");
}

function closeWin() {
  if (myWindow) {
    myWindow.close();
  }
}

function checkWin() {
let text = "";
if (!myWindow) {
  text = "It has never been opened!";
} else {
  if (myWindow.closed) { 
    text = "It is closed.";
  } else {
    text = "It is open.";
  }
}
document.getElementById("demo").innerHTML = text;
}

//Window alert()//
function myFunction() {
  alert("Hello! Welcome!");
}
//prompt() Method//
function Prompt_Function() {
  let person = prompt("Please enter your name", "Jack Smith");
  if (person != null) {
    document.getElementById("prompt").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
//getElementByClassName()//
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "The text has changed!"
}

//Canvas -- graphic/text//
function myCanvas() {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);
}
