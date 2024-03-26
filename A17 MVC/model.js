class TodoModel {
    constructor() {
      this.todos = [];
    }
  
    // Adiciona uma nova tarefa
    addTodo(todoText) {
      const todo = {
        id: Date.now(),
        text: todoText,
        completed: false
      };
      this.todos.push(todo);
      return todo;
    }
  
    // Marca uma tarefa como concluída
    toggleTodo(todoId) {
      const todo = this.todos.find(todo => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  
    // Remove uma tarefa
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  }
  