
const playElement = document.getElementById("message");
let choicecounter = 0;


// To roll the dice just once time 
const myPlayBtn = document.getElementById("play");
myPlayBtn.addEventListener('click', function () {
  message.textContent = "Roll dice:";
  choicecounter = 0;
  buttons.forEach(button => {
    button.style.backgroundColor = "#000000";
  })
});

// Players choice of number 
const playerScore = document.getElementById("player-score");
const choice = ["1", "2", "3", "4", "5", "6"]; // players choice of number    
const buttons = document.querySelectorAll(".control");
buttons.forEach(button => {
  button.addEventListener("click", changeBoardColor);

});

// change colour of picked cards with number - 3 cards
function changeBoardColor(event) {
    if (choicecounter < 3) {
    console.log("click button");
    console.log(event.target.value);
    event.target.style.backgroundColor = "#FFFFFF";
    //   board.style.transition = ".5s ease";
    choicecounter++;
  }
}
//create the dice
function createDice(number) {
  const dotPositionMatrix = {
    1: [
      [50, 50]
    ],
    2: [
      [20, 20],
      [80, 80]
    ],
    3: [
      [20, 20],
      [50, 50],
      [80, 80]
    ],
    4: [
      [20, 20],
      [20, 80],
      [80, 20],
      [80, 80]
    ],
    5: [
      [20, 20],
      [20, 80],
      [50, 50],
      [80, 20],
      [80, 80]
    ],
    6: [
      [20, 20],
      [20, 80],
      [50, 20],
      [50, 80],
      [80, 20],
      [80, 80]
    ]
  };
  const dice = document.createElement("div");
  dice.classList.add("dice");

  for (const dotPosition of dotPositionMatrix[number]) {
    const dot = document.createElement("span");

    // create the dots on dice 
    dot.classList.add("dice-dot");
    dot.style.setProperty("--top", dotPosition[0] + "%");
    dot.style.setProperty("--left", dotPosition[1] + "%");
    dice.appendChild(dot);
  }
  return dice;
}

const diceContainer = document.getElementById("dice-container");
diceContainer.innerHTML = ""; // clear dots to new roll
const dice = createDice(6);
diceContainer.appendChild(dice);

// roll Dice with dots 
function rollDice() {
  if (message.textContent == "Roll dice:") {
    const diceContainer = document.getElementById('dice-container');
    const diceSpans = diceContainer.querySelectorAll('span');

    // Add class "roll" to get animation
    diceSpans.forEach(span => span.classList.add("roll"));

    // quit animation
    setTimeout(() => {
      diceSpans.forEach(span => span.classList.remove("roll"));
      const correctNumber = rollDiceInternal(); // Anropa rollDiceInternal() och lagra resultatet i correctNumber
      checkAnswer(correctNumber);
    },500);
  }
}

//help with this function from perplexity
function rollDiceInternal() {
  const diceContainer = document.getElementById('dice-container');
  const diceSpans = diceContainer.querySelectorAll('span');
  const numberOfRolls = diceSpans.length;
  const randomNumber = Math.floor(Math.random() * numberOfRolls) + 1;


  diceContainer.innerHTML = ""; // clear dots to new roll
  const dice = createDice(randomNumber);
  diceContainer.appendChild(dice);

     message.textContent = "dice rolled: ";
     return randomNumber;
}


     const playerChoices = [];
function changeBoardColor(event) {
  if (choicecounter < 3) {
        event.target.style.backgroundColor = "#FFFFFF";
    //   board.style.transition = ".5s ease";
      playerChoices.push(event.target.value);
      choicecounter++;
    
      }  console.log(playerChoices);
}




const messageElement = document.getElementById("result");
const winnervideo = document.createElement("video");
const loservideo = document.createElement("video");

winnervideo.src = "https://christina5p.github.io/Are-you-a-dice-player/assets/image/win.mp4";
winnervideo.alt = "winner";
winnervideo.type = "video/mp4";
loservideo.src ="https://christina5p.github.io/Are-you-a-dice-player/assets/image/lose.mp4";
loservideo.alt = "loser";
loservideo.type = "video/mp4";

function checkAnswer(correctNumber) {
   console.log("correctnumber", correctNumber);
   console.log(playerChoices);
 
 if (playerChoices.includes(correctNumber.toString()))  {
   messageElement.textContent = "You won";
  messageElement.appendChild(winnervideo);
  setTimeout(() => {   
  },9000); // Vänta 9 sekunder innan rensning
  console.log(visualViewport)

  }   else {
  messageElement.textContent = "You lost";
  messageElement.appendChild(loservideo);
 setTimeout(() => {   
  }, 9000); // Vänta 9 sekunder innan rensning
  }
  console.log(visualViewport);
}

/*
console.log(visualViewport)
playerChoices.splice(0, playerChoices.length);
console.log(playerChoices);

update.getElementById("result");


const element = document.getElementById("result");
while (element.childNodes);
element.remove(); 
element.removeChild();


let choicecounter = 0;
messageElement.textContent = ""; // Rensa meddelandet
messageElement.appendChild(winnervideo); 
messageElement.textContent = ""; // Rensa meddelandet
messageElement.appendChild(loservideo); 
*/

