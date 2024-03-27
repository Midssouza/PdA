class TodoController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      // Liga os eventos da visão aos métodos do controllerr
      this.view.bindAddTodo(this.handleAddTodo);
      this.view.bindToggleTodo(this.handleToggleTodo);
      this.view.bindRemoveTodo(this.handleRemoveTodo);
  
      // Renderiza a lista inicial de tarefas
      this.view.displayTodos(this.model.todos);
    }/*No construtor da classe TodoController, são inicializadas duas propriedades:
    -this.model: Uma referência ao objeto TodoModel, que representa o model da aplicação de lista de tarefas.
    -this.view: Uma referência ao objeto TodoView, que representa a visualização da aplicação de lista de tarefas.
    entro do construtor, os eventos da view  são ligados aos métodos do controller através do:
    -this.view.bindAddTodo(this.handleAddTodo): Liga o evento de adição de nova tarefa da view  ao método handleAddTodo do controller.
    -this.view.bindToggleTodo(this.handleToggleTodo): Liga o evento de marcação de tarefa como concluída da view  ao método handleToggleTodo do controller.
    -this.view.bindRemoveTodo(this.handleRemoveTodo): Liga o evento de remoção de tarefa da view  ao método handleRemoveTodo do controller.
    a lista inicial de tarefas é renderizada chamando o método displayTodos da view  e passando a lista de tarefas atual do model (this.model.todos).*/

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
    };/*O método handleAddTodo, handleToggleTodo e handleRemoveTodo são métodos do controllerr que são chamados quando ocorrem eventos na view .
    -handleAddTodo é chamado quando uma nova tarefa é adicionada. Ele recebe o texto da nova tarefa como argumento, adiciona a tarefa ao model chamando o método addTodo do model, e então atualiza a view chamando o método displayTodos da view  para refletir as mudanças.
    -handleToggleTodo é chamado quando uma tarefa é marcada/desmarcada como concluída. Ele recebe o ID da tarefa como argumento, altera o estado da tarefa no model chamando o método toggleTodo do model, e então atualiza a view chamando o método displayTodos da view para refletir as mudanças.
    -handleRemoveTodo é chamado quando uma tarefa é removida. Ele recebe o ID da tarefa como argumento, remove a tarefa do model chamando o método removeTodo do model, e então atualiza a view chamando o método displayTodos da view para refletir as mudanças.
    Esses métodos são responsáveis por manipular as interações do usuário e coordenar as atualizações entre o model e a view.*/
  
  }
  