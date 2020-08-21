const todos = document.getElementById("todos");
let todosList = [];

const todosOnLoad = () => {
    todosList = JSON.parse(localStorage.getItem("todos")) || [];
    updateTodos();
}

function handleKeyPress(e) {
    if(e.keyCode === 13){
        e.preventDefault();
        addTodo(e);
    }
}

function removeTodo(e) {
    const todo = e.target.parentElement.parentElement;
    todosList.splice(todo.id, 1);
    updateTodos()
}

function addTodo(e) {
    if(e.target.value === ""){
        console.log("You can't add an empy todo");
    } else {
        let newTodo = {
            text: e.target.value,
            isCompleted: false
        }
        todosList.unshift(newTodo);
        e.target.value = "";
        updateTodos();
    }
}

function updateTodos() {
    todos.innerHTML = "";
    todosList.forEach((todo, index) => {
        let newTodo = document.createElement('div');
        let innerHTMLStr = `
        <div class="text">
            ${todo.text}
        </div>
        <div onclick="removeTodo(event)" class="button">
            <img src="./remove.svg" alt="trash icon" />
        </div>
        `
        let className = todo.isCompleted ? "todo completed" : "todo"
        newTodo.className = className;
        newTodo.id = index;
        newTodo.innerHTML = innerHTMLStr;
        newTodo.addEventListener("click", () => {
            newTodo.classList.toggle("completed");
            try {
                todosList[index].isCompleted = !todosList[index].isCompleted;
            } catch (error){
            }
        });
        todos.appendChild(newTodo);
    });
    localStorage.setItem('todos', JSON.stringify(todosList));
}
