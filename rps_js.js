   const compPick = document.querySelector('#compPickPhoto');
   let random;
   function randomFunc() {
   random = Math.floor((Math.random()*3) + 1);
   console.log(random)
   return random;
  }
   console.log(randomFunc())
/*
   function roll () {
    let photoArr = [rockStyle(), paperStyle(), scissorsStyle()];
    for (let i = 0; i < photoArr.length; i++) {
      setTimeout(photoArr[i], 3000);
    }
   }
*/

  function noStyle () {
    compPick.style.width = '95%';
    compPick.style.margin = 'auto';
    compPick.style.objectPosition = '50%';
  }  

   function rockStyle () {
    compPick.style.objectPosition = "11%";
    compPick.style.width = '75px';
   }

   function paperStyle () {
    compPick.style.width = '75px';
   }

   function scissorsStyle() {
    compPick.style.objectPosition = "89%";
    compPick.style.width = '75px';
   }

   let RPS;
   function choice(word) {
     RPS = word;
     console.log(RPS)
     return RPS;
   }

   let computerPlay = function() {
        let compPlay;
      if (RPS === "rock" || RPS === "paper" || RPS === "scissors") {
        switch (randomFunc()) {
            case 1:
            compPlay = "rock";
            rockStyle();
            break;
            case 2:
            compPlay = "paper";
            paperStyle();
            break;
            case 3:
            compPlay = "scissors";
            scissorsStyle();
          }         
            return compPlay;
          } else {
            alert('Please pick an option.');
        }
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

    if (gameResult.textContent === "You Lose!") {
      roundResult.textContent = "*";
      computerScore.appendChild(roundResult)
    } else if (gameResult.textContent === "You Win!") {
      roundResult.textContent = "*";
      userScore.appendChild(roundResult)
    }

}

  const userScore = document.querySelector('#user_score');
  const computerScore = document.querySelector('#computer_score')
  const roundResult = document.createElement('p')

  const results = document.querySelector('.results');
  const gameResult = document.createElement('p');
  gameResult.style.fontSize = '2em'
  gameResult.style.fontWeight = 'bold'

  const rock = document.querySelector('#rock');
  rock.addEventListener('click', () => {
    choice("rock");
    noStyle();
  });
  const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => {
    choice("paper")
    noStyle();
  });
  const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => {
    choice("scissors")
    noStyle();
  });

  const play = document.querySelector('#play');
  play.addEventListener('click', () => oneGame(RPS, computerPlay()));

 