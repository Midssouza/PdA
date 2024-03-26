class TodoModel {
    constructor() {
      this.todos = [];
    }// declaração de uma classe TodoModel. O construtor da classe é chamado quando um novo objeto TodoModel é criado. 
    //Ele inicializa a propriedade todos como um array vazio, que será usado para armazenar as tarefas.
  

    // Adiciona uma nova tarefa
    addTodo(todoText) {
      const todo = {
        id: Date.now(),
        text: todoText,
        completed: false
      };
      this.todos.push(todo);
      return todo;
    }//addTodo é responsável por adicionar uma nova tarefa à lista. Ele recebe o texto da tarefa como parâmetro, cria um objeto de tarefa com um ID único gerado a partir do timestamp atual, o texto da tarefa e define o estado completed como false. 
    //Em seguida, o objeto de tarefa é adicionado ao array todos e é retornado.
  
    // Marca uma tarefa como concluída
    toggleTodo(todoId) {
      const todo = this.todos.find(todo => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }// método toggleTodo é responsável por alternar o estado de conclusão de uma tarefa específica. Ele recebe o ID da tarefa como parâmetro e busca a tarefa correspondente no array todos. 
    //Se a tarefa for encontrada, o estado completed é alternado entre true e false.
  
    // Remove uma tarefa
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }// método removeTodo é responsável por remover uma tarefa da lista. 
    //Ele recebe o ID da tarefa como parâmetro e atualiza o array todos, removendo a tarefa com o ID correspondente.
  }
  