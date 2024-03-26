class TodoView {
    constructor() {
      this.todoList = document.getElementById('todo-list');
      this.inputTodo = document.getElementById('input-todo');
      this.form = document.getElementById('todo-form');
    }
  
    bindAddTodo(handler) {
      this.form.addEventListener('submit', event => {
        event.preventDefault();
        const todoText = this.inputTodo.value.trim();
        if (todoText) {
          handler(todoText);
          this.inputTodo.value = '';
        }
      });
    }
  
    bindToggleTodo(handler) {
      this.todoList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
          const todoId = parseInt(event.target.getAttribute('data-id'));
          handler(todoId);
        }
      });
    }
  
    bindRemoveTodo(handler) {
      this.todoList.addEventListener('click', event => {
        if (event.target.tagName === 'SPAN') {
          const todoId = parseInt(event.target.parentElement.getAttribute('data-id'));
          handler(todoId);
        }
      });
    }
  
    displayTodos(todos) {
      this.todoList.innerHTML = '';
      todos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.setAttribute('data-id', todo.id);
        todoItem.innerHTML = `
          <span class="delete">X</span>
          <input type="checkbox" ${todo.completed ? 'checked' : ''}>
          <label>${todo.text}</label>
        `;
        this.todoList.appendChild(todoItem);
      });
    }
  }
  