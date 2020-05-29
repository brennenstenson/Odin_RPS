   const compPick = document.querySelector('#compPickPhoto');
   let random = Math.floor((Math.random()*3) + 1);

   let computerPlay = function() {
        let compPlay;
        switch (random) {
            case 1:
            compPlay = "rock";
            compPick.style.objectPosition = "11%";
            compPick.style.width = '75px';
            break;
            case 2:
            compPlay = "paper"; 
            compPick.style.width = '75px';
            break;
            case 3:
            compPlay = "scissors";
            compPick.style.objectPosition = "89%";
            compPick.style.width = '75px';
          }
        return compPlay;
        }

  function oneGame (playerSelection, computerSelection) {
    let arr2 = ["rock", "paper", "scissors", "rock"];
    for (let i = 0; i < arr2.length; i++) {
     if (playerSelection == arr2[i]) {
         if (computerSelection == playerSelection) {
           gameResult.textContent = "Tie.";
         } else if (computerSelection == arr2[i + 1]) {
           gameResult.textContent = "You Lose!";
         } else if (computerSelection == arr2[i - 1]){
           gameResult.textContent = "You Win!";
       }
     }
    }
    results.appendChild(gameResult);
 }


  const computerSelection = computerPlay();
  const results = document.querySelector('.results');
  const gameResult = document.createElement('div');
  gameResult.style.fontSize = '2em'
  gameResult.style.fontWeight = 'bold'

  console.log(computerSelection)

  const rock = document.querySelector('#rock');
  rock.addEventListener('click', () => choice("rock"));
  const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => choice("paper"));
  const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => choice("scissors"));
  
  let RPS;
  function choice(word) {
    RPS = word;
    console.log(RPS)
    return RPS;
  }
  
  const play = document.querySelector('#play');
  play.addEventListener('click', () => oneGame(RPS, computerSelection));

  /*

 const compPick = document.querySelector('#compPickPhoto');

 let computerPlay = function() {
      let random = Math.floor((Math.random()*3) + 1);
      let compPlay;
      switch (random) {
          case 1:
          compPlay = "rock";
          compPick.style.objectPosition = "11%";
          compPick.style.width = '75px';
          break;
          case 2:
          compPlay = "paper"; 
          compPick.style.width = '75px';
          break;
          case 3:
          compPlay = "scissors";
          compPick.style.objectPosition = "89%";
          compPick.style.width = '75px';
        }
      return compPlay;
      }

function choice() {
  
}

function oneGame (playerSelection, computerSelection) {
  let arr2 = ["rock", "paper", "scissors", "rock"];
  for (let i = 0; i < arr2.length; i++) {
   if (playerSelection == arr2[i]) {
       if (computerSelection == playerSelection) {
         gameResult.textContent = "Tie.";
       } else if (computerSelection == arr2[i + 1]) {
         gameResult.textContent = "You Lose!";
       } else if (computerSelection == arr2[i - 1]){
         gameResult.textContent = "You Win!";
     }
   }
  }
  results.appendChild(gameResult);
}

const computerSelection = computerPlay();

const results = document.querySelector('.results');
const gameResult = document.createElement('div');

console.log(computerSelection)

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => oneGame("rock", computerSelection));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => oneGame("paper", computerSelection));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => oneGame("scissors", computerSelection));

const play = document.querySelector('#play');
play.addEventListener('click', () => oneGame(choice, computerSelection));

*/