const searchTodo = document.querySelector('form.search');
const addTodo = document.querySelector('form.add');
const todoList = document.querySelector('ul');
let todoItems = document.querySelectorAll('li');
let todoItemsArray = [];
// for addding items to list of items
todoItems.forEach((p) => { 
    todoItemsArray.push(p.querySelector('span').innerText);
});
//search the term
searchTodo.addEventListener('keyup', (e) => {
    e.preventDefault(true);
    if (e.target.tagName === 'INPUT') {
        const searchTerm = e.target.value;
        const findedOn = todoItemsArray.filter(p => {
            if (p.match(searchTerm)) {
                return 1;
            }
        });
        todoList.innerHTML = '';
        todoItems.forEach(p => {
            if (findedOn.includes(p.querySelector('span').innerText)) {
                todoList.insertAdjacentElement('afterbegin', p);
            }
        });
    }
});
//add todo
addTodo.addEventListener('submit', (e) => {
    e.preventDefault(true);
    const todoName = addTodo.querySelector('input');
    // const todoName = addTodo.add.value;
    const todoEl = document.createElement('li');
    todoEl.className = "list-group-item d-flex justify-content-between aligh-items-center";
    todoEl.innerHTML = `<span>${todoName.value.trim()}</span>
                        <i class="far fa-trash-alt delete"></i>`;
    if (todoName.value === '') { return; } else {
        todoItemsArray.push(todoName.value);
        todoList.append(todoEl);
        todoItems = document.querySelectorAll('li');
        todoName.value = '';
    }
});
//remove todo handler
todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
        const mustToRemove = e.target.parentElement.querySelector('span').innerText;
        e.target.parentElement.remove();
        const fileterdtodoItemsArray = todoItemsArray.filter(p => {
            return p !== mustToRemove;
        });
        todoItemsArray = fileterdtodoItemsArray;
    }
});