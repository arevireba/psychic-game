
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

document.onkeyup = function(event) {

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
    guessesLeft--;
}

if (letterToBeGuessed == userGuess) {
    wins++;
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
}

if (guessesLeft == 0) {
    losses++;
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
}

var html = 
"<h1>The Psychic Game</h1>" + 
"<p>Guess what letter I'm thinking of!</p>" + 
"<p>Wins: " + wins + "</p>" + 
"<p>Losses: " + losses + "</p>" + 
"<p>Guesses Left: " + guessesLeft + "</p>" +
"<p>Your guesses so far: " + guessesSoFar + "</p>";

document.querySelector("#game").innerHTML = html;
        }
