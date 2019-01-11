////////////////////////////////////////////////////////////////////////////
// list of windows scope VARs:

var playing, score, winningNumber, winCounter, lossCounter, valueBlue, valueGreen, valueYellow, valueRainbow;
winCounter = 0;
lossCounter = 0;

////////////////////////////////////////////////////////////////////////////
// list of functions: 

function init() {
    playing = true;
    score = 0;
    winningNumber = Math.floor(Math.random() * 102) + 19;
    $("#winning-number").html(winningNumber);
    $("#wins").html(winCounter);
    $("#losses").html(lossCounter);
    $("#score").html(score);
    
    valueBlue = getValue();
    valueGreen = getValue();
    valueYellow = getValue();
    valueRainbow = getValue();
    
    console.log(winningNumber, valueBlue, valueGreen, valueYellow, valueRainbow);
};

// created this function so all four crystals hold unique values
function getValue() {
    var randomValue;
    do {
        randomValue = Math.floor(Math.random() * 12) + 1;
    } while(randomValue === valueBlue || randomValue === valueGreen || randomValue === valueYellow || randomValue === valueRainbow);
    return randomValue;
};

function checkStatus() {
    if (score <= winningNumber){
        if (score === winningNumber) {
            // increment winCounter
            winCounter ++;
            // display that the user won the game on Status section
            $("#status").text("You WON !!!");
            console.log("You won!");
            playing = false;
            $("#wins").html(winCounter);
            init();
        } else {
            // just display the status stating game is still playing
            $("#status").text("Still Playing . . .");
        }

    } else {
        // this else means that the score is now greater than the winningNumber
        lossCounter ++;
        // display that the user lost the game on Status section
        $("#status").text("You Lost");
        $("#losses").html(lossCounter);
    
        init();
    }
    
};

////////////////////////////////////////////////////////////////////////////

init();

$("#blue-crystal").on("click", function() {
    if (playing) {
        score += valueBlue;
        $("#score").html(score);
        checkStatus()
    }
});

$("#green-crystal").on("click", function() {
    if (playing) {
        score += valueGreen;
        $("#score").html(score);
        checkStatus()
    }
});

$("#yellow-crystal").on("click", function() {
    if (playing) {
        score += valueYellow;
        $("#score").html(score);
        checkStatus()
    }
});

$("#rainbow-crystal").on("click", function() {
    if (playing) {
        score += valueRainbow;
        $("#score").html(score);
        checkStatus()
    }
});
