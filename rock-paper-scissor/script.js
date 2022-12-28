const lista = ['Rock', 'Paper', 'Scissor'];
function getComputerChoice() {
  let result = lista[Math.floor(Math.random() * lista.length)];
  console.log(result);
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection !== computerSelection) {
    console.log('Voce Perdeu');
  } else {
    ('Você ganhou');
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
