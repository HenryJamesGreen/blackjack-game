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

function firstPickPlayer() {
  min = Math.ceil(4);
  max = Math.floor(21);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  return;
}

playerScore = firstPickPlayer() + playerScore;
console.log(playerScore);

function firstPickDealer() {
  min = Math.ceil(2);
  max = Math.floor(11);
  return Math.floor(Math.random() * (max - min + 1) + min);
  return;
}

dealerScore = firstPickDealer() + dealerScore;
console.log(dealerScore);
