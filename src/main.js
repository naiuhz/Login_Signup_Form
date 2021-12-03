//import {writeFile, readFile} from 'fs'
//import fs from 'fs'
//import * as fs from 'fs';
/*var liveServer = require("live-server");

var params = {
    port: 8181, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0.
    root: "/public", // Set root directory that's being server. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    wait: 1000 // Waits for all changes, before reloading. Defaults to 0 sec.
};
liveServer.start(params);*/
fetch('http://localhost:8818/')
        .then(response => response.json())
        .then(data => console.log(data));
document.onload = function () {
    console.log("On load");
    fetch('http://localhost:8818/')
        .then(response => response.json())
        .then(data => console.log(data));
};

let usernames = {};

// TODO: Read usernames file

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const usernameForm = document.querySelector("#username");
    const passwordForm = document.querySelector("#password");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        console.log("B");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        console.log("C");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        console.log("A");
        // Perform your AJAX/Fetch login
        let username = usernameForm.value; //usernameForm.value;
        let password = passwordForm.value;
        setFormMessage(loginForm, "error", username + ":" + password);
        //setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    //TODO: event listener for sign up

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
            //console.log("B"); 
        });
    });
});