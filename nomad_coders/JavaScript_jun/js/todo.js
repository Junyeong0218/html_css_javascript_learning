const toDoInput = toDoForm.querySelector("input");
const toDoBtn = toDoForm.querySelector("button");

const TODO_KEY = "todo";

let ls = [];

if(localStorage.getItem(TODO_KEY) !== null) {
    ls = JSON.parse(localStorage.getItem(TODO_KEY));
    ls.forEach((item) => paintList(item));
}

toDoForm.addEventListener("submit", addToList);

function addToList(event) {
    event.preventDefault();
    const toDoText = toDoInput.value;
    const id = Date.now();

    toDoInput.value = "";

    const obj = {
        id: id,
        text: toDoText
    }

    paintList(obj);
    
    ls.push(obj);

    saveToLocalStorage(ls);
}

function saveToLocalStorage(ls) {
    localStorage.setItem(TODO_KEY, JSON.stringify(ls));
}

function paintList(obj) {
    const li = document.createElement("li");
    li.id = obj.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = obj.id;
    checkbox.name = obj.id;
    checkbox.addEventListener("click", checkedLi);
    
    const span = document.createElement("span");
    span.innerText = obj.text;

    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteLi);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function deleteLi(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    ls = ls.filter((item) => item.id !== parseInt(li.id));

    saveToLocalStorage(ls);

    li.remove();
}

function checkedLi(event) {
    const span = event.target.parentElement.querySelector("span");
    span.classList.toggle("checked");
}