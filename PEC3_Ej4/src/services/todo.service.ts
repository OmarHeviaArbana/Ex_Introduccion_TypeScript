import Todo from './../models/todo.model';

class TodoService {
  private todos: Todo[];
  private onTodoListChanged: Function = () => {}; 

  constructor() {
    const storedTodos = localStorage.getItem("todos");
    this.todos = storedTodos ? JSON.parse(storedTodos) : [];
  }

  bindTodoListChanged(callback: Function): void {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]): void {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string): void {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter(({ id: todoId }) => todoId !== id);

    this._commit(this.todos);
  }

  toggleTodo(id: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
  getAllTodos(): Todo[] {
    return this.todos;
  }

}

export default TodoService; 
