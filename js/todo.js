const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos를 string으로 바꿔서 저장
}

function deleteToDo(event) {
    const li = event.target.parentElement // target: 클릭된 HTML element, parentElement: 클릭된 element의 부모
    li.remove();
    
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // filter는 return true인 것으로만 구성된 새로운 array 반환함
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newToDo.id;
    span.innerText = newToDo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // li 안에 span이 오도록 함
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }

    toDoInput.value = "";
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}