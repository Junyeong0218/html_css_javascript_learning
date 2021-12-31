const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");

const ID_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

if(localStorage.getItem(ID_KEY) !== null) {
    logined();
}

loginForm.addEventListener("submit", submitEvent);

function submitEvent(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(ID_KEY, username);

    logined();
}

function logined() {
    greeting.innerText = `${localStorage.getItem(ID_KEY)}님 환영합니다!`;

    loginForm.id = "";
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
}