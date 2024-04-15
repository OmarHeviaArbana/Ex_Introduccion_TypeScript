"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_controller_1 = __importDefault(require("./../src/controllers/todo.controller"));
const todo_service_1 = __importDefault(require("./../src/services/todo.service"));
const todo_views_1 = __importDefault(require("./../src/views/todo.views"));
const app = new todo_controller_1.default(new todo_service_1.default(), new todo_views_1.default());
