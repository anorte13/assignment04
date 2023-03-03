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
  console.log(randomNum);
  if (randomNum === 1) {
    cpuChoice = "rock";
  } else if (randomNum === 2) {
    cpuChoice = "paper";
  } else {
    cpuChoice = "scissors";
  }
  return cpuChoice;
};
