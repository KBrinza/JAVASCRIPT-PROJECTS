//“TYPE OF” OPERATOR example. Returns "string"//
document.write(typeof "word")

//“TYPE OF” OPERATOR example. Returns "number"/
document.write(typeof 3)

//“TYPE OF” OPERATOR example. returns "boolean"/
document.write(typeof true)

//TYPE COERCION//
document.write("10" + 5) //number 5 is tacked onto the string “10”)//

//NOT A NUMBER//
function my_function() {
    document.getElementById("test").innerHTML = 0/0;
}
//isNaN//
function my_function2() {
    document.getElementById("test2").innerHTML = isNaN('This is string');
}


function my_function3() {
    document.getElementById("test3").innerHTML = isNaN('007');
}

//infinity//
function infinity(){
    document.getElementById("infinity").innerHTML = document.write(2E310);
}

//negative infinity//
//infinity//
function neginfinity(){
    document.getElementById("neginfinity").innerHTML = document.write(-3E310);
}

//Boolean values//
//for true//
function boolean(){
    document.getElementById("boolean").innerHTML = document.write(10 > 2);
}
//for false//
function moreboolean(){
    document.getElementById("moreboolean").innerHTML = document.write(50 > 100);
}

//console log//
console.log(2 + 2);

//Display “false” in the console using Boolean logic and the console.log() method.//
console.log(5 < 2);

//DOUBLE EQUAL SIGNS//
//true//
function equalsigns(){
    document.getElementById("equalsigns").innerHTML = document.write(10 == 10);
}
//false//
function moresigns(){
    document.getElementById("moresigns").innerHTML = document.write(200 == 10);
}
//triple equal sign//
//A: Return true by ensuring to match the data type and value.//
function triple(){
x = 10;
y = 10;
document.getElementById(triple).innerHTML = document.write(x === y);
}
//B: Return false by writing a different data type and different value.//
function triple2(){
    A = 6;
    B = "Seven";
    document.getElementById(triple2).innerHTML = document.write(A === B);
    }

//C: Return false by writing a different data type but the same value for both.//
function triple3(){
    DateOfBirth1 = 6/7/2002;
    DateOfBirth2 = "6/7/2002";
    document.getElementById(triple3).innerHTML = document.write(DateOfBirth1 === DateOfBirth2);
}

//D: Return false by writing the same data type but a different value for both.//
function triple4(){
    C = "blue";
    D = "red";
    document.getElementById(triple4).innerHTML = document.write(C === D);
}

//LOGICAL OPERATORS//
//and//
function logical1(){
    document.getElementById(logical1).innerHTML = document.write(5 > 2 && 10 > 4);
}
//or//
function logical2(){
    document.getElementById(logical2).innerHTML = document.write(5 > 2 || 10 > 20);
}
//NOT//
function not_function() {
    document.getElementById("Not").innerHTML = document.write = !(20 > 10);
}

function not() {
    document.getElementById("Not2").innerHTML = document.write = !(20 < 10);
}