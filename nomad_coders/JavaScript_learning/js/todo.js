const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintTodo);
    toDos = parsedToDos;
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function paintTodo(toDoObj) {
    const li = document.createElement("li");
    li.id = toDoObj.id;

    const span = document.createElement("span");
    span.innerText = toDoObj.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const toDoText = toDoInput.value;
    toDoInput.value = "";
    const toDoObj = {
        text: toDoText,
        id: Date.now()
    }
    toDos.push(toDoObj);

    paintTodo(toDoObj);
    saveToDos();
}

function deleteToDo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

/*
function deleteToDo(event) {
    event.preventDefault();
    const li = event.path[1];
    li.remove();
}
*/

// JSON.stringify(<Array>) returns String that changed from Array
// Array.filter(<function[(item)]>)
// If the function is true at each case, the item will be holded.
// You have to update the Array when you use filter.
// ex) array = array.filter(<function>);
// For above case, object's id is a Number but, li's id is String.
// So you have to parse li's id to Int.