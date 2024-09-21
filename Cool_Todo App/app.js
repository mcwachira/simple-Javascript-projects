const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");

const todoList = document.querySelector(".todo-list");

const filterOption = document.querySelector(".filter-todo");
const filterTodo = document.querySelector(".todo-filter");

let todos = [];
const todoJson = localStorage.getItem("todos");
if (todoJson !== null) {
  JSON.parse(todoJson);
} else {
  todos = [];
}
const filters = {
  searchText: "",
};
const renderTodo = (todos, filters) => {
  const filteredTodo = todos.forEach((todo) => {
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Todo item
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // saveTodos(todoInput.value);

    //completed button
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);
    //DELETE button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("trash-btn");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear input value
    todoInput.value = "";
  });
};
renderTodo(todos, filters);

//delete todo
const deleteTodo = (e) => {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeTodos(todo);
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
    // todo.remove();
  }
};

const checkCompleted = (e) => {
  const item = e.target;
  if (item.classList[0] === "complete-btn") {
    item.parentElement.classList.add("completed");
  }
};
//filter todo
const filterTodos = (e) => {
  const todos = todoList.childNodes;

  console.log(e.target.value);
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};

//remove todos
const removeTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todos.indexOf(todo.children[0].innerText);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};

//event Listeners

//add todo
todoButton.addEventListener("click", (e) => {
  e.preventDefault();

  todos.push(todoInput.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  todoList.innerHTML = "";
  renderTodo(todos, filters);
});

//search todo
filterTodo.addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodo(todos, filters);
});

//delete todo
todoList.addEventListener("click", deleteTodo);

//mark completed todo
todoList.addEventListener("click", checkCompleted);

//filter
// filterOption.addEventListener("click", filterTodos);
// document.addEventListener("DOMContentLoaded", renderTodo);
