//button function//
function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById ("Button_Text").innerHTML = str;
}

//changes paragraph text to red when clicked on and back to black when mouse is released//
function mouseDown() {
  document.getElementById("p1").style.color = "red";
}

function mouseUp() {
  document.getElementById("p1").style.color = "black";
}


//Write a function that includes assigning two variables and utilizes the document.getElementById method//
//!!!need an example!!//


//concatenate with +=//
function myfunction() {
    var sentence = "i am learning";
    sentence += " a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentence;
}