"use strict";
var _a;
const username = document.getElementById("username");
const password = document.getElementById("password");
(_a = document.getElementById('submit-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const user = username.value;
    const pass = password.value;
    if (user == "sajib@gmail.com" && pass == "123456") {
        window.location.href = "../banking.html";
    }
    else {
        alert("Wrong password or email.");
        username.value = "";
        password.value = "";
    }
});
