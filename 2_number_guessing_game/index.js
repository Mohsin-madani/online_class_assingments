#!usr/bin/env ts- node
import inquirer from "inquirer";
// 1.computer will generate a random number
// 2.user input for guessing number
// 3Compare user input with generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "please guess a number between 1 to 6"
    }
]);
if (answers.userGuessednumber === randomNumber) {
    console.log("congratulations you guessed right number");
}
else {
    console.log("wrong number");
}
console.log(`\n\n"mk"`);
