#! /usr/bin/env node
//shabang

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statement
if (asnwer.operator === "Addition") {
    console.log( asnwer.firstNumber + asnwer.secondNumber);
} else if (asnwer.operator === "Subtraction") {
    console.log( asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.operator === "Multiplication") {
    console.log( asnwer.firstNumber * asnwer.secondNumber);
} else if (asnwer.operator === "Division") {
    console.log( asnwer.firstNumber / asnwer.secondNumber);
} else {
    console.log("please select valid operator")
}