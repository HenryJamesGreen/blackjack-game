//player score start = 0
//dealer score = 0
//function that gives a random number between 4-21 to player
//function that gives random number between 2-11 to dealer
//function to play the game - player gets a turn - player has a score - decides to stick or hit; if hit, deal random number to player - add their random number to their score ;repeat until player decides to stick or goes over or === 21.
//repeat with dealer ; if dealer is < 17 add number; if dealer is => 17 - stay and run comparison;
//if boh player and dealer sat && are under 21; compare scores. Higher score wins
// winning condition: to win - score === 21 (or closest to 21)
//losing condition; score over 21

let playerScore = 0;
let dealerScore = 0;
const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const randomNumber = [
  4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];


function firstPickPlayer(min, max) {
    min = Math.ceil(4);
    max = Math.floor(21);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  

console.log(firstPickPlayer());
