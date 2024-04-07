#!/usr/bin/env node
import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "user ID",
        message: "Enter User ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your Pin "
    },
    {
        type: "list",
        name: "account Type",
        choices: ["current ", "saving"],
        message: "Select Your Account Type "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash ", "Cash Withdraw", "Balanace Inquiry"],
        message: "Select Your transaction"
    },
    {
        type: "number",
        name: "amount ",
        message: "Enter amount you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "Cash withdraw ";
        }
    },
    {
        type: "list  ",
        name: "amount ",
        choices: [1000, 2000, 5000, 20000, 25000],
        message: "Select Your amount you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "Fast Cash ";
        }
    }
]);
//making variable of user input data 
const userID = userInput.userID;
const userPin = userInput.userPin;
const enteredAmount = userInput.amount;
if ((userID && userPin) && userInput.transactionType === "Balance Inquiry") {
    const userBalance = Math.floor(Math.random() * 100000);
    console.log(`Your current balance is Rs ${userBalance}\n`);
}
else if (userID && userPin) {
    const userBalance2 = Math.floor(Math.random() * 100000);
    if (userBalance2 > enteredAmount) {
        console.log(`Your account has beendebited with Rs${enteredAmount} and yourremaining Balance is ${userBalance2 - enteredAmount}`);
    }
    else {
        console.log(`\n insufficient Balance`);
    }
}
