class TodoView {
    constructor() {
      this.todoList = document.getElementById('todo-list');
      this.inputTodo = document.getElementById('input-todo');
      this.form = document.getElementById('todo-form');
    }/*construtor da classe TodoView, são inicializadas três propriedades
      -this.todoList: Uma referência ao elemento HTML que contém a lista de tarefas.
      -this.inputTodo: Uma referência ao elemento HTML que representa o campo de entrada para adicionar novas tarefas.
      -this.form: Uma referência ao elemento HTML do formulário usado para adicionar novas tarefas.*/
  
    bindAddTodo(handler) {
      this.form.addEventListener('submit', event => {
        event.preventDefault();
        const todoText = this.inputTodo.value.trim();
        if (todoText) {
          handler(todoText);
          this.inputTodo.value = '';
        }
      });
    }/* método bindAddTodo é responsável por vincular um manipulador de eventos ao evento de envio do formulário para adicionar uma nova tarefa. 
    Quando o formulário é enviado, este método previne o comportamento padrão de recarregar a página (event.preventDefault()), obtém o texto da nova tarefa do campo de entrada (this.inputTodo.value.trim()), verifica se o texto não está vazio e, em seguida, chama o manipulador passando o texto da tarefa como argumento.*/
  
    bindToggleTodo(handler) {
      this.todoList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
          const todoId = parseInt(event.target.getAttribute('data-id'));
          handler(todoId);
        }
      });
    }/*método bindToggleTodo é responsável por vincular um manipulador de eventos ao evento de clique em um item da lista de tarefas para marcar/desmarcar uma tarefa como concluída.
      Quando um item da lista é clicado, este método verifica se o elemento clicado é um <li>, obtém o ID da tarefa associada a partir do atributo data-id e, em seguida, chama o manipulador passando o ID da tarefa como argumento.*/
  
    bindRemoveTodo(handler) {
      this.todoList.addEventListener('click', event => {
        if (event.target.tagName === 'SPAN') {
          const todoId = parseInt(event.target.parentElement.getAttribute('data-id'));
          handler(todoId);
        }
      });
    }/*método bindRemoveTodo é responsável por vincular um manipulador de eventos ao evento de clique no botão de remoção (<span class="delete">X</span>) de uma tarefa. 
    Quando o botão de remoção é clicado, este método obtém o ID da tarefa associada a partir do elemento pai do botão, e em seguida, chama o manipulador passando o ID da tarefa como argumento.*/
  
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
    }/*método displayTodos é responsável por exibir as tarefas na lista de tarefas. 
    Ele recebe um array de objetos de tarefas (todos) como argumento e atualiza o conteúdo da lista de tarefas (this.todoList) com base nesses objetos de tarefas. 
    Para cada tarefa no array todos, o método cria um novo elemento <li> com um botão de remoção, uma caixa de seleção para marcar a tarefa como concluída e um rótulo com o texto da tarefa. Em seguida, adiciona esse elemento à lista de tarefas.*/
  }
  