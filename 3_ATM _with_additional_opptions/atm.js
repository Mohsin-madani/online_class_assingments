import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let oprationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select an option",
            type: "list",
            choices: ["fastCash", "withdraw", "check balance"]
        }
    ]);
    if (oprationAnswer.operation === "fastCash") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "please select an option",
            type: "list",
            choices: ["500", "1000", "3000", "5000", "10000", "20000"]
        });
        // myBalance-=amountAns.amount ;
        // console.log("your remaining balance is:" + myBalance);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log("collect your cash your remaining balance is:" + myBalance);
        }
        else if (amountAns.amount > myBalance) {
            console.log("sorry you have not enough money please try again");
        }
    }
    else if (oprationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                massage: "enter your amount",
                type: "number"
            }
        ]);
        // myBalance-= amountAns.amount;
        // console.log("your remaining balance is:" + myBalance);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log("collect your cash your remaining balance is:" + myBalance);
        }
        else if (amountAns.amount > myBalance) {
            console.log("sorry you have not enough money please try again");
        }
    }
    else if (oprationAnswer.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("incorrect pin number");
}
