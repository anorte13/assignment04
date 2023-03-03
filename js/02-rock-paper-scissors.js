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
      console.log(userChoice);
      return userChoice;
    }
  }
}
