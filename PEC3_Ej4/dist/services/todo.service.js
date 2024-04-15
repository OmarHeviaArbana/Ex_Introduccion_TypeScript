"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = __importDefault(require("./../models/todo.model"));
class TodoService {
    constructor() {
        this.onTodoListChanged = () => { }; // Inicialización de la propiedad
        const storedTodos = localStorage.getItem("todos");
        this.todos = storedTodos ? JSON.parse(storedTodos) : [];
    }
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    _commit(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    addTodo(text) {
        this.todos.push(new todo_model_1.default({ text }));
        this._commit(this.todos);
    }
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo => todo.id === id
            ? new todo_model_1.default(Object.assign(Object.assign({}, todo), { text: updatedText }))
            : todo);
        this._commit(this.todos);
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(({ id: todoId }) => todoId !== id);
        this._commit(this.todos);
    }
    toggleTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? new todo_model_1.default(Object.assign(Object.assign({}, todo), { complete: !todo.complete })) : todo);
        this._commit(this.todos);
    }
    getAllTodos() {
        return this.todos;
    }
}
exports.default = TodoService;
