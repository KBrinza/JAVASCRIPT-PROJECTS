function add_Function(){
    //adds 2+2 when button is clicked on//
    var addition = 2 + 2;
    //displays result in p with id=math//
    document.getElementById('math').innerHTML = "2 + 2 = " + addition;
}

//subtraction//
function subtract(){
    var Subraction = 5 - 2;
    document.getElementById('sub').innerHTML = "5 - 2 = " + Subraction;
}

//multiplication//
function mult(){
    var simple_Math = 5 * 2;
    document.getElementById('mult').innerHTML = "5 * 2 = " + simple_Math;
}

//Division//
function divide(){
    var simple_Math = 5 / 2;
    document.getElementById('divide').innerHTML = "5 / 2 = " + simple_Math;
}

//multistep math problem//
function maths(){
    var simple_Math = (1 + 1) * 10 / 2 - 5;
    document.getElementById('maths').innerHTML = "1 plus 2, multiplied by 10, divided in half and then subracted by 5 equals " + simple_Math;
}

//multistep math problem without all the verbiage... why use all the words when it works without them?//
function multiMath(){
    var simple_Math = (5 + 5) * 5;
    document.getElementById('multiMath').innerHTML = "(5 + 5) * 5 = " + simple_Math;
}

//MODULUS OPERATOR//
function modulus(){
    var simple_Math = 25 % 6;
    document.getElementById('modulus').innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//UNARY OPERATOR//
//negation operator//
//used -10 return positive number (it worked!), but changed back for a negative return//
function negation(){
    var x = 10;
    document.getElementById('negation').innerHTML = -x;
}

//INCREMENT AND DECREMENT OPERATORS//
//INCREMENT//
function increment(){
    var x = 5;
    x++
    document.getElementById('increment').innerHTML = x++;
}
//DECREMENT//
function decrement(){
    var x = 5.25;
    x--
    document.getElementById('decrement').innerHTML = x--;
}
//RANDOM//
//number between 0 and 1//
window.alert(Math.random());

//number between 0 and 100//
window.alert(Math.random() * 100);

//MATH OBJECT CHALLENGE//
function demo(){
document.getElementById("demo").innerHTML = Math.PI;
}

function round(){
    document.getElementById("round").innerHTML = Math.round(4.6);
    }