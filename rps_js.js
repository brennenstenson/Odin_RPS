   const compPick = document.querySelector('#compPickPhoto');
   let random;
   function randomFunc() {
   random = Math.floor((Math.random()*3) + 1);
   console.log(random)
   return random;
  }
   console.log(randomFunc())

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

let humanScore = 0;
let machineScore = 0;

  function oneGame (playerSelection, computerSelection) {
    let arr2 = ["rock", "paper", "scissors", "rock"];
    for (let i = 0; i < arr2.length; i++) {
     if (playerSelection == arr2[i]) {
         if (computerSelection == playerSelection) {
           gameResult.textContent = "Tie.";
         } else if (computerSelection == arr2[i + 1]) {
           gameResult.textContent = "You Lose!"; 
           machineScore += 1;
           console.log("machine score = " + machineScore)   
         } else if (computerSelection == arr2[i - 1]){
           gameResult.textContent = "You Win!";
           humanScore += 1;
           console.log("humanScore is " + humanScore);
       }
     }
    } 
    results.appendChild(gameResult);  
}

  function scoreCount() {
    if (gameResult.textContent === "You Win!") {
      roundResult1.textContent = `${humanScore}`;
      userScore.appendChild(roundResult1)
    } else if (gameResult.textContent === "You Lose!") {
      roundResult.textContent = `${machineScore}`;
      computerScore.appendChild(roundResult)
    }  
  }

  const userScore = document.querySelector('#user_score');
  const computerScore = document.querySelector('#computer_score')
  const roundResult = document.createElement('p')
  const roundResult1 = document.createElement('p')

  roundResult.textContent = `${machineScore}`;
  roundResult1.textContent = `${humanScore}`;
  computerScore.appendChild(roundResult);
  userScore.appendChild(roundResult1);

  function totalCount() {
    if (machineScore == 5) {
      alert("Sorry, you lose");
	  newMatch();
    } else if (humanScore == 5) {
      alert("You beat the computer!");
	  newMatch()
    }
  }

  const results = document.querySelector('.results');
  const gameResult = document.createElement('p');
  gameResult.style.fontSize = '2em';
  gameResult.style.fontWeight = 'bold';

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
  play.addEventListener('click', () => {
    oneGame(RPS, computerPlay());
    scoreCount();
    totalCount();
  });
  
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', () => {
	machineScore = 0;
	humanScore = 0;
	roundResult.textContent=0;
    roundResult1.textContent=0;
    document.getElementById("newGame").style.visibility = "hidden";
    document.getElementById("newGame").style.position = "absolute";
    document.getElementById("play").style.position = "initial";
    document.getElementById("play").style.visibility = "visible";
  });


  function newMatch() {
	// reset game //
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("play").style.position = "absolute";
    document.getElementById("newGame").style.position = "initial";

    document.getElementById("newGame").style.visibility = "visible";
  }
	
