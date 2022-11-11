const todoList = document.querySelector('.todo-list');

const todoListForm = todoList.querySelector('.todo-list__form');
const todoListFormInput = todoListForm.querySelector('input');
const todoListFormButton = todoListForm.querySelector('button');

const todoListItems = todoList.querySelector('.todo-list__items');

let todoListData = [];

todoListFormButton.addEventListener('click', () => {
  todoListData.push(todoListFormInput.value);

  todoListItems.innerHTML = todoListData
    .map((todo) => `<li>${todo}</li>`)
    .join('');
});
