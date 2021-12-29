const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    paintGreetings(username);
}


// Function used by eventListener has an argument about what happened.
// preventDefault() blocks web browser's doing when the event occured.
// Form's basic behavior is "SUBMIT"
// Link's basic behavior is "Go to another web sites"
// [ String combine ] uses Backtick (`) and ${}
// const variableName = "name";
// `asdfasdf ${variableName} asdfasdfga` === "asdfasdf name asdfasdfga"
// [ localStorage ]
// setItem(Key, Value);
// getItem(Key); returns Value
// removeItem(Key);