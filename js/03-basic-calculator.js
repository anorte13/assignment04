// IMPORT THE MODULE
import { add, subtract, multiply, divide } from "./modules/calculator.js";
let count = 1;
do {
  // COLLECT FIRST NUMBER FROM USER
  let x = parseInt(prompt("Please enter a number"));
  // COLLECT SECOND NUMBER FROM USER
  let y = parseInt(prompt("Ehter second number"));
  // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

  let operation = prompt(
    "Please pick your operation: (add, subtract, multiply, divide)"
  );
  if (
    operation !== "add" &&
    operation !== "subtract" &&
    operation !== "multiply" &&
    operation !== "divide"
  ) {
    alert("Please enter a valid operation!");
  } else {
    switch (operation) {
      case "add":
        add(x, y, "add");
        break;
      case "subtract":
        subtract(x, y, "subtract");
        break;
      case "multiply":
        multiply(x, y, "multiply");
        break;
      case "divide":
        divide(x, y, "divide");
        break;
    }
    count--;
  }
} while (count > 0);
// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
