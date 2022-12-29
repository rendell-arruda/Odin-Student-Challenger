const choices = ['rock', 'paper', 'scissors'];
const winners = [];
//play the game, play five rounds,console based
function game() {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
  logWins();
}

//function one round
function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  console.log(computerSelection);
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
}

function playerChoice() {
  let input = prompt('Type Rock, Paper, or Scissors');
  while (input == null) {
    input = prompt('Type Rock, Paper, or Scissors');
  }
  input = input.toLowerCase();
  let check = validateInput(input);

  while (check == false) {
    input = prompt(
      'Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter'
    );
    while (input == null) {
      input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  // get random input from computer
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return 'A Tie';
  } else if (
    (choiceP === 'rock' && choiceC == 'scissors') ||
    (choiceP === 'paper' && choiceC == 'rock') ||
    (choiceP === 'scissors' && choiceC == 'paper')
  ) {
    return 'Player';
  } else {
    return 'Computer';
  }
}

function logWins() {
  console.log(winners);
}
