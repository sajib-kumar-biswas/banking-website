// things we need to update
// const deposit = document.getElementById("deposit");
// const withdraw = document.getElementById("withdraw");
// const balance = document.getElementById("balance");

// buttons 
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

// input fields
const inputDeposit = document.getElementById("inputDeposit") as HTMLInputElement | null;
const inputWithdraw = document.getElementById("inputWithdraw") as HTMLInputElement | null;

// getter function
function getCurrentValue(id: string): number {
    const amountElement = document.getElementById(id);
    const amountText:string = amountElement? amountElement.innerText : "0";
    return parseFloat(amountText);
}

// updater function
function update(amount: number, id: string, isAdd: boolean){
    const current = getCurrentValue(id);
    const element = document.getElementById(id);
    if(element) {
        if(isAdd) {
            element.innerText = String(current + amount);
        } else {
            element.innerText = String(current - amount);
        }
    } 
}

// function to help
function helper(element: any, isDeposit: boolean) {
    const amount = parseFloat(element.value);
    element.value = "";
    const balance = getCurrentValue("balance");
    if(isDeposit) {
        update(amount, "deposit", true);
        update(amount, "balance", true);
    } else if(amount >= 1 && Math.floor(balance) > amount) {
        update(amount, "withdraw", true);
        update(amount, "balance", false)
    } else if(amount <=0 ) {
        alert("Invalid amount!!");
    } else {
        alert("Insufficient balance!!");
    }
}

// adding event listeners for the buttons
depositBtn?.addEventListener("click", () => helper(inputDeposit, true));
withdrawBtn?.addEventListener("click", () => helper(inputWithdraw, false));