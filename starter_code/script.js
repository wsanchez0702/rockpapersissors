var ROCK = 'rock';
var PAPER = 'paper';
var SCISSORS = 'scissors';
var COMPUTER_WINS = 'computer wins';
var USER_WINS = 'user wins';
var DRAW = 'draw';
var VALID_CHOICES = [ROCK, PAPER, SCISSORS];

// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
var array = ["rock","paper","scissor"]
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2.
var number = Math.round((Math.random()*2)); 
return array[number]
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[ranomNum])


    // Task 1, Step 4: return this new value
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the

    // userChoice and computerChoice under any possible game outcome.
var outcome = '';
if (userChoice == ROCK) {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = COMPUTER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    else if (userChoice == PAPER) {
       if (computerChoice == ROCK) {
           outcome = USER_WINS;
       }
       else if (computerChoice == PAPER) {
           outcome = DRAW;
       }
       else {
           outcome = COMPUTER_WINS;
       }
    }
    else {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = USER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    return outcome 
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    var outcome = '';
    if (userChoice == ROCK) {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = COMPUTER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    else if (userChoice == PAPER) {
       if (computerChoice == ROCK) {
           outcome = USER_WINS;
       }
       else if (computerChoice == PAPER) {
           outcome = DRAW;
       }
       else {
           outcome = COMPUTER_WINS;
       }
    }
    else {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = USER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    return outcome 
    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
var handleUserClick = function(userChoice){
    // generate the computer choice
    var computerChoice = generateComputerChoice();
    
    // pick a winner
    var outcome = pickWinner(userChoice, computerChoice);
    
    // set the html element text for the computer choice and the outcome
    $('#computer-choice').text('The computer picked ' + computerChoice);
    $('#winner').text('Outcome: ' + outcome);
};