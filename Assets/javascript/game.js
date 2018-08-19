// Declare variables and assign fixed values to each crystal
var totalScore = 0;
var wins = 0;
var losses = 0;
var gameRunning = true;
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1);
var clearCrystal = Math.floor((Math.random() * 12) + 1);
var metalCrystal = Math.floor((Math.random() * 12) + 1);


// Create a randomNumber generator to become the Target Score
var targetScore = Math.floor((Math.random() * 101) + 19);
$('#target').text(targetScore);

// Create a randomNumber generator for each crystal with class ".crystals" and push it to a numberArray
// function crystals () {
//     // random number
//     var crystalNumber = Math.floor((Math.random() * 12) + 1);
//     // run 4 times to establish a random number for each crystal. Push to the crystalArray for storage throughout the game.
//     for (i=0; i < 4; i++) {
//         crystalArray.push[crystalNumber];
//         crystalNumber = Math.floor((Math.random() * 12) + 1);
//         console.log(crystalNumber);
//     };
// };

// Assign crystalsNumber (a random number) 


// Create an on.click function that adds the selected crystal value to the total score
// Add blueCrystal to totalScore
$('#blue-crystals').on("click", function() {
    totalScore = totalScore + blueCrystal;
    $('#scoreTotal').text(totalScore);
    console.log(totalScore);
    
});

// Add clearCrystal to totalScore
$('#clear-crystals').on("click", function() {
    totalScore = totalScore + clearCrystal;
    $('#scoreTotal').text(totalScore);
    console.log(clearCrystal);
});

// Add greenCrystal to totalScore
$('#green-crystals').on("click", function() {
    totalScore = totalScore + greenCrystal;
    $('#scoreTotal').text(totalScore);
    console.log(greenCrystal);
});

// Add metalCrystal to totalScore
$('#metal-crystals').on("click", function() {
    totalScore = totalScore + metalCrystal;
    $('#scoreTotal').text(totalScore);
    console.log(metalCrystal);
});

// Create a check win/loss function to .crystals
$(".crystals").click(function() {
    if(totalScore === targetScore) {
        wins++;
        $('#wins').text(wins);
        gameRunning = false;
        alert("Congratulations! You won!");
        newGame();
    } else {
        if(totalScore > targetScore) {
            losses++;
            $('#losses').text(losses);
            gameRunning = false;
            alert("Sorry! You went over the Target Score. Please try again.");
            newGame();
        } else {
            // continue on playing
        };
    };
});

// Create a newGame function to start after every win or loss
function newGame () {
    var gameRunning = true;
    var blueCrystal = (Math.floor((Math.random() * 12) + 1));
    var greenCrystal = (Math.floor((Math.random() * 12) + 1));
    var clearCrystal = (Math.floor((Math.random() * 12) + 1));
    var metalCrystal = (Math.floor((Math.random() * 12) + 1));    
    var targetScore = Math.floor((Math.random() * 101) + 19);
    $('#target').text(targetScore);
    var totalScore = 0;
    $('#scoreTotal').text(totalScore);
    var gameRunning = true;
};

