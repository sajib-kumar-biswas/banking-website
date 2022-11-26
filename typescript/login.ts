const username = document.getElementById("username") as HTMLInputElement;

const password = document.getElementById("password") as HTMLInputElement;

document.getElementById('submit-btn')?.addEventListener("click", function() {
    const user = username.value;
    const pass = password.value;
    if(user == "sajib@gmail.com" && pass == "123456") {
        window.location.href = "../banking.html";
    }else {
        alert("Wrong password or email.");
        username.value = "";
        password.value = "";
    }
})