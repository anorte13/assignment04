//STEP 1
function halfNumber(num) {
  let result = num / 2;
  return console.log(`Half of ${num} is ${result}`);
}
halfNumber(5);
//STEP 2
function squareNumber(num) {
  let square = num * num;
  return console.log(`The result of squaring ${num} is: ${square}`);
}
squareNumber(3);
//STEP 3
function percentOf(num1, num2) {
  let percent = (num1 / num2) * 100;
  console.log(`${num1} is ${percent}% of ${num2}`);
}
percentOf(9, 20);
//STEP 4
function findModulus(x, y) {
  let modulus = x % y;
  return console.log(`${modulus} is the modulus of ${x} and ${y}`);
}
findModulus(10, 4);
//STEP 5
