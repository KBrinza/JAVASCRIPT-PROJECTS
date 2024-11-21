//keeps track of whose turn it is//
let activePlayer = 'x';
//stores array of moves used to determine winning conditions//
let selectedSquares = [];

//for placing an X or an O//
function placeXOrO(squareNumber) {
    //ensures square hasn't already been selected//
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //retrieves HTML element that was clicked//
        let select = document.getElementById(squareNumber);
        //checks whose turn it is//
        if (activePlayer === 'x') {
            //if activePlayer equals X, retreives and places x.png//
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            //if activePlayer equals O, retreives and places o.png//
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer === 'x') {
            activePlayer = 'o';
        } else {
            activePlayer = 'x';
        }
//plays placement sound//
        audio('./media/place.mp3');
        if (activePlayer === 'o') {
            //disables clicking during computer's turn//
            disableClick();
            //waits 1 second before comp. places an image//
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }
//results in computer selecting random square//
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

//searches for winning conditions//
//drawLine() is called if conditions are met//
function checkWinConditions() {
    if (arrayIncludes('0x', '1x', '2x')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3x', '4x', '5x')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6x', '7x', '8x')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0x', '3x', '6x')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1x', '4x', '7x')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2x', '5x', '8x')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6x', '4x', '2x')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0x', '4x', '8x')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0o', '1o', '2o')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3o', '4o', '5o')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6o', '7o', '8o')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0o', '3o', '6o')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1o', '4o', '7o')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2o', '5o', '8o')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6o', '4o', '2o')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0o', '4o', '8o')) { drawWinLine(100, 100, 520, 520) }
    //Checks for a tied game//   
    else if (selectedSquares.length >= 9) {
        //plays tied game sound//
        audio('./media/tie.mp3');
        //sets .3 second timer before resetGame is called//
        setTimeout(function () { resetGame(); }, 500);
    }

//Checks if array includes 3 strings.//
//Used to check each win condition//
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b === true && c === true) {return true; }
    }
}

//makes body element temporarily unclickable//
function disableClick() {
    body.style.pointerEvents = 'none';
    //If 3 variables are all included in array, then true is//
    //returned and "else if" condition executes drawLine() function//
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//this uses string parameter of path set earlier for sound placement//
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//utilizes canvas to draw a line when player wins//
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    
    //interaction with canvas//
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .80';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }
    }

    //clears canvas after win line is drawn//
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//resets game//
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}