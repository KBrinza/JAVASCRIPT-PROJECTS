//basic dictionary//
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark",
    };
    document.getElementById("MyDictionary").innerHTML = Animal.Sound;
}

//dictionary where two pairs have identical keys//
function Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark",
        Sound: "Woof",
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

//DELETE ASSIGNMENT//
//sound key comes back as "undefined"//
function DictionaryDelete() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark",
    };
    delete Animal.Sound;
    document.getElementById("DictionaryDelete").innerHTML = Animal.Sound;
}