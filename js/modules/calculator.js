// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(x, y, func) {
  if (func === "add") {
    let z = x + y;
    return alert(`${x} + ${y} = ${z}`);
  } else if (func === "subtract") {
    let z = x - y;
    return alert(`${x} - ${y} = ${z}`);
  } else if (func === "multiply") {
    let z = x * y;
    return alert(`${x} x ${y} = ${z}`);
  } else {
    let z = x / y;
    return alert(`${x} ÷ ${y} = ${z}`);
  }
}
// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
const add = (x, y, operrand) => {
  calculate(x, y, operrand);
};
// SUBTRACT FUNCTION
const subtract = (x, y, opperand) => {
  calculate(x, y, opperand);
};
// MULTIPLY FUNCTION
const multiply = (x, y, opperand) => {
  calculate(x, y, opperand);
};
// DIVIDE FUNCTION
const divide = (x, y, opperand) => {
  calculate(x, y, opperand);
};
// EXPORT THE FOUR PUBLIC FUNCTIONS
export { add, subtract, multiply, divide };
