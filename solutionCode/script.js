//This variable sets the user's value to rock. This value can be changed manually when testing in the console. 
var userChoice = null;
//Task3: To be completed after this game functions in the console. 
    // Set userChoice to "null" and create a click handler that changes the value based on the item the user clicks on the HTML page.

$(document).ready(function() {
 
    // Step 1: create a click funtion.
    $("#rock").click(function (){
      //Step 2 : After you create a click function you have to reset userChoice to rock,paper or scissors.
        userChoice = "rock";
        // Step 3: Run the pickWinner function
        pickWinner(userChoice, computerChoice);
       
    });
    
    $("#paper").click(function(){
      userChoice = "paper";
      pickWinner(userChoice, computerChoice);
    });
    
    $("#scissors").click(function(){
      userChoice = "scissors";
      pickWinner(userChoice, computerChoice);
    });
    
  // Task1: Task 1 randomly choose between 'rock', 'paper', or 'scissors' and assignd the selection of the computer to the variable computerChoice
  function generateComputerChoice(){
    //Step 1: Create an array with three elements (rock, paper and scissors).
    var choice = ["rock", "paper", "scissors"];
    //Step 2: Use the JavaScript Math function to generate a random whole number between 0 and 2.
    var randomPick = Math.floor(Math.random()*3);
    //Step 3: Use this randomly generated number to pull a value from the array (eg myArray[ranomNum])
              //return this new value
    return choice[randomPick];
  }
  var computerChoice = generateComputerChoice();

  // Task2: This function compares the userChoice and the computerChoice to decide who won
  function pickWinner(userChoice, computerChoice) {
    console.log("user = " + userChoice);
    console.log("computer = " + computerChoice);
      // Step 1: Create an "if/else if/else" statement that compares the userChoice and computerChoice under any possible game outcome.
      // Step 2: Depending on who is the winner of the game console.log either "user wins", "computer wins" or "draw"
      if (
            userChoice === "scissors"  && computerChoice === "paper"  ||
            userChoice === "paper"    && computerChoice === "rock"    ||
            userChoice === "rock" && computerChoice === "scissors" ) {
                console.log('User Wins') ;
                $("#result").append("<div> User Wins </div>");
      } else if ( computerChoice === "scissors" && userChoice === "paper" ||
            computerChoice === "paper"   && userChoice === "rock"   ||
            computerChoice === "rock"    && userChoice === "scissors") {
                console.log('Computer Wins');
                $("#result").append("<div> Computer Wins </div> ");
      } else {
                console.log('The game is a draw');
                $("#result").append("<div> The gmae is draw </div>");
      }
  }
  

});