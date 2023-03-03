function getUserChoice() {
  while (true) {
    userChoice = prompt("Pick rock, paper or scissors:");
    if (
      userChoice != "rock" &&
      userChoice != "paper" &&
      userChoice != "scissors"
    ) {
      alert("Please enter a valid response!");
    } else {
      return userChoice;
    }
  }
}
const computerChoice = () => {
  randomNum = Math.floor(Math.random() * 3) + 1;
  let cpuChoice;
  if (randomNum === 1) {
    cpuChoice = "rock";
  } else if (randomNum === 2) {
    cpuChoice = "paper";
  } else {
    cpuChoice = "scissors";
  }
  return cpuChoice;
};
const playGame = () => {
  alert("Welcome to the Rock, Paper, Scissors Game!");
  let user = getUserChoice();
  let cpu = computerChoice();
  if (cpu === user) {
    alert(`You picked ${user} and the computer picked ${cpu} it's a TIE`);
  } else if (
    (user === "rock" && cpu === "paper") ||
    (user === "paper" && cpu === "scissors") ||
    (user === "scissors" && cpu === "rock")
  ) {
    alert(`You picked ${user} and the computer picked ${cpu} COMPUTER WINS`);
  } else {
    alert(`You picked ${user} and the computer picked ${cpu} YOU WIN!`);
  }
};
playGame();
