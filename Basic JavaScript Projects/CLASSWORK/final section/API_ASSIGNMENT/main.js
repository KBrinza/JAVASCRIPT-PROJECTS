function getNumberFact() {
    fetch('http://numbersapi.com/random/trivia')
            .then(response => response.text())
            .then(fact => {
            document.getElementById('factDisplay').textContent = fact;
        })
            .catch(error => {
            document.getElementById('factDisplay').textContent = "Error fetching fact.";
        });
}


function getCatFact() {
    fetch('https://catfact.ninja/fact')
            .then(response => response.text())
            .then(fact => {
            document.getElementById('catFactDisplay').textContent = fact;
        })
            .catch(error => {
            document.getElementById('catFactDisplay').textContent = "Error fetching fact.";
        });
}


function getDogCEO() {
        "message": "https://images.dog.ceo/breeds/coonhound/n02089078_3440.jpg",
        "status": "success"
    }


https://api.funtranslations.com/translate/catalan.json