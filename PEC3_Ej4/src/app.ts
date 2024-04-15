import TodoController from './../src/controllers/todo.controller';
import TodoService from './../src/services/todo.service';
import TodoView from './../src/views/todo.views';

const app = new TodoController(new TodoService(), new TodoView());
