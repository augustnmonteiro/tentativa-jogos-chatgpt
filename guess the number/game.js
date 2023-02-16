// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Keep track of the number of guesses
let numGuesses = 0;

// Get the input field and button from the HTML document
const guessInput = document.querySelector("#guessInput");
const guessButton = document.querySelector("#guessButton");
const messageDisplay = document.querySelector("#messageDisplay");

// Add an event listener to the button
guessButton.addEventListener("click", function() {
  // Get the player's guess from the input field
  const playerGuess = Number(guessInput.value);

  // Increment the number of guesses
  numGuesses++;

  // Check if the player's guess is correct
  if (playerGuess === randomNumber) {
    // Display a message indicating the player won
    messageDisplay.textContent = `Congratulations, you won in ${numGuesses} guesses!`;

    // Generate a new random number and reset the number of guesses
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numGuesses = 0;
  } else if (playerGuess < randomNumber) {
    // Display a message indicating the player's guess was too low
    messageDisplay.textContent = "Your guess was too low. Try again!";
  } else {
    // Display a message indicating the player's guess was too high
    messageDisplay.textContent = "Your guess was too high. Try again!";
  }
  
  // Clear the input field
  guessInput.value = "";
});
