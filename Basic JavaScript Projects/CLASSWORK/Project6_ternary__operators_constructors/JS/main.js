//***TERNARY OPERATORS***//
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age > 17) ? "You can vote!":"Sorry, you can't vote.";
    document.getElementById("Vote").innerHTML = Can_Vote;
}

//***OBJECT-ORIENTED PROGRAMMING***//
//keywords & utilizing "this + new"//
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//***NEW KEYWORD ASSIGNMENT***//
function animals(Breed, Size, Sound) {
    this.animals_Breed = Breed;
    this.animals_Size = Size;
    this.animals_Sound = Sound;
}
var Sally = new animals("Dog", "Small", "Woof");
var Sam = new animals("Cat", "Big", "Meow");
function NewFunction() {
    document.getElementById("New_and_This").innerHTML = "Sally has a " + Sally.animals_Breed + " and Sam has a " + Sam.animals_Breed;
}

//***NESTED FUNCTIONS***//
function count_Function() {
    document.getElementById("Count").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}