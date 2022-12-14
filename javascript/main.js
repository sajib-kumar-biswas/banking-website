"use strict";
// things we need to update
// const deposit = document.getElementById("deposit");
// const withdraw = document.getElementById("withdraw");
// const balance = document.getElementById("balance");
// buttons 
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
// input fields
const inputDeposit = document.getElementById("inputDeposit");
const inputWithdraw = document.getElementById("inputWithdraw");
// getter function
function getCurrentValue(id) {
    const amountElement = document.getElementById(id);
    const amountText = amountElement ? amountElement.innerText : "0";
    return parseFloat(amountText);
}
// updater function
function update(amount, id, isAdd) {
    const current = getCurrentValue(id);
    const element = document.getElementById(id);
    if (element) {
        if (isAdd) {
            element.innerText = String(current + amount);
        }
        else {
            element.innerText = String(current - amount);
        }
    }
}
// function to help
function helper(element, isDeposit) {
    const amount = parseFloat(element.value);
    element.value = "";
    const balance = getCurrentValue("balance");
    if (isDeposit) {
        update(amount, "deposit", true);
        update(amount, "balance", true);
    }
    else if (amount >= 1 && Math.floor(balance) > amount) {
        update(amount, "withdraw", true);
        update(amount, "balance", false);
    }
    else if (amount <= 0) {
        alert("Invalid amount!!");
    }
    else {
        alert("Insufficient balance!!");
    }
}
// adding event listeners for the buttons
depositBtn === null || depositBtn === void 0 ? void 0 : depositBtn.addEventListener("click", () => helper(inputDeposit, true));
withdrawBtn === null || withdrawBtn === void 0 ? void 0 : withdrawBtn.addEventListener("click", () => helper(inputWithdraw, false));
