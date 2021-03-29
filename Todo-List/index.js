
const addTodo =  document.querySelector('.add');

const list = document.querySelector('.todos');
const search =  document.querySelector('search , input');


const getTodoTemplate = toDos =>    {

    const html = `
    
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>
        ${toDos}
    </span>
    <i class="far fa-trash-alt delete"></i>
</li>
    `;
    list.innerHTML += html;
};


addTodo.addEventListener('submit', e => {
    e.preventDefault();
   const toDos =  addTodo.add.value.trim().toLowerCase();
  

   if(toDos.length){
    getTodoTemplate(toDos);
  
   }
 
});

list.addEventListener('click', e =>    {
    if( e.target.classList.contains('delete'))  {
        e.target.parentElement.remove();
    }
 
});

const filteredTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) =>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) =>todo.classList.remove('filtered'));

} ;


//keyup event

search.addEventListener('keyup', () =>  {
    const term  =  search.value;

    filteredTodos(term)
});








const todoForm =  document.querySelector('.todo-form');

const todoInput = document.querySelector('.todo-input');

const todoList =  document.querySelector('.todo-items');



let todos =[];
todoForm.addEventListener('submit', e =>    {
    e.preventDefault();
    const todo =  todoInput.value.trim().toLowerCase();

    addTodo(todo);
});


const addTodo = todo => {
    if(todo.length) {
    const todoItem = {
        id:Date.now(),
        name:todo,
        completed:false
    };
        todos.push(todoItem);
    storeTodos(todos);
    todoInput.value = "";
    todoForm.focus();
    }
};

const displayTodos = todos =>   {

     todoList.innerHTML = "";
todos.forEach((todo) => {
 const checked = todo.completed? "checked": null;
const li = document.createElement('li');
li.setAttribute('class', 'todo');
li.setAttribute('data-key', todo.id);

if(todo.completed === true){
    li.classList.add('checked');
}
li.innerHTML = `
<input type="checkbox" class="checkbox" ${checked}>
${todo.name}
<button class="delete">X</button>

`;

todoList.append(li);
});
};


//stores data in local storage
const storeTodos = todos => {
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos(todos);
};



//gets data from local storage
const fetchTodos =  () =>  {
    const todoItems = localStorage.getItem('todos');
    if(todoItems !== null)  {
        todos =  JSON.parse(todoItems);
        displayTodos(todos);
    } else {
        todos = [];
    }
};

todoList.addEventListener('click', e => {
    if(e.target.type ===  'checkbox')  {
        toggle(e.target.parentElement.getAttribute('data-key'));
    }

    if(e.target.classList.contains('delete'))  {
        deleteTodo(e.target.parentElement.getAttribute('data-key'));
    }
});


const toggle =  id =>   {
todos.forEach((todo) => {
    if(todo.id  == id)  {
        todo.completed = !todo.completed;
    }
    storeTodos(todos);
    displayTodos(todos);
});
};
const deleteTodo =  id =>    {
    const todoIndex =  todos.findIndex((todo) =>    {
        return todo.id == id;
    });

    if(todoIndex > -1)  {
        todos.splice(todoIndex, 1);
    }


    storeTodos(todos);
    displayTodos(todos);
};


fetchTodos();