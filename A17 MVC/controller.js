class TodoController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      // Liga os eventos da visão aos métodos do controlador
      this.view.bindAddTodo(this.handleAddTodo);
      this.view.bindToggleTodo(this.handleToggleTodo);
      this.view.bindRemoveTodo(this.handleRemoveTodo);
  
      // Renderiza a lista inicial de tarefas
      this.view.displayTodos(this.model.todos);
    }
  
    handleAddTodo = todoText => {
      const newTodo = this.model.addTodo(todoText);
      this.view.displayTodos(this.model.todos);
    };
  
    handleToggleTodo = todoId => {
      this.model.toggleTodo(todoId);
      this.view.displayTodos(this.model.todos);
    };
  
    handleRemoveTodo = todoId => {
      this.model.removeTodo(todoId);
      this.view.displayTodos(this.model.todos);
    };
  }
  