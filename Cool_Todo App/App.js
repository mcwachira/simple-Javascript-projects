const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");

const todoList = document.querySelector(".todo-list");

const filterOption = document.querySelector(".filter-todo");

const addTodo = (event) => {
  event.preventDefault();
  //   event.stopImmediatePropagation();

  //Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Todo item
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo);
  saveTodos(todoInput.value);

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
};

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
    // if (e.target.value === "all") {
    //   todo.style.display = "flex";
    // } else if (
    //   e.target.value === "completed" &&
    //   todo.classList.contains("completed")
    // ) {
    //   todo.style.display = "flex";
    // } else {
    //   todo.style.display = "flex";
    // }
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

const saveTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Todo item
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;

    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);

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
  });
};

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

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
todoList.addEventListener("click", checkCompleted);

filterOption.addEventListener("click", filterTodos);
document.addEventListener("DOMContentLoaded", getTodos);
