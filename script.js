let chances = 1;
makeRandom();
function makeRandom() {
  const random = Math.ceil(Math.random() * 100);
  console.log(random);
  play(random);
}
function checkGuess(userNumber, randomNumber) {
  if (chances < 10) {
    if (userNumber < 1 || userNumber > 100) {
      console.log("pick number between 1 100");
      console.log(`${10 - chances} chance left`);
      play(randomNumber);
    } else if (userNumber < randomNumber) {
      console.log("wrong! pick bigger number");
      console.log(`${10 - chances} chance left`);
      chances++;
      play(randomNumber);
    } else if (userNumber > randomNumber) {
      console.log("wrong! pick smaller number");
      console.log(`${10 - chances} chance left`);
      chances++;
      play(randomNumber);
    } else {
      console.log("you win!");
    }
  } else {
    console.log(`${10 - chances} chance left`);
    console.log("you lost!");
  }
}
function play(randomNumber) {
  const userNumber = +prompt("enter a number");
  console.log(userNumber);
  checkGuess(userNumber, randomNumber);
}
