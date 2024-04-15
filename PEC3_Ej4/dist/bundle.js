(()=>{"use strict";var t={859:function(t,e,o){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=i(o(404)),d=i(o(572)),n=i(o(61));new s.default(new d.default,new n.default)},404:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(t,e){this.onTodoListChanged=t=>{this.view.displayTodos(t)},this.handleAddTodo=t=>{this.service.addTodo(t)},this.handleEditTodo=(t,e)=>{this.service.editTodo(t,e)},this.handleDeleteTodo=t=>{this.service.deleteTodo(t)},this.handleToggleTodo=t=>{this.service.toggleTodo(t)},this.service=t,this.view=e,this.service.bindTodoListChanged(this.onTodoListChanged),this.view.bindAddTodo(this.handleAddTodo),this.view.bindEditTodo(this.handleEditTodo),this.view.bindDeleteTodo(this.handleDeleteTodo),this.view.bindToggleTodo(this.handleToggleTodo),this.onTodoListChanged(this.service.getAllTodos())}}},524:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor({text:t,complete:e}={text:"",complete:!1}){this.id=this.uuidv4(),this.text=t,this.complete=e||!1}uuidv4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){const e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}}},572:function(t,e,o){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=i(o(524));e.default=class{constructor(){this.onTodoListChanged=()=>{};const t=localStorage.getItem("todos");this.todos=t?JSON.parse(t):[]}bindTodoListChanged(t){this.onTodoListChanged=t}_commit(t){this.onTodoListChanged(t),localStorage.setItem("todos",JSON.stringify(t))}addTodo(t){this.todos.push(new s.default({text:t})),this._commit(this.todos)}editTodo(t,e){this.todos=this.todos.map((o=>o.id===t?new s.default(Object.assign(Object.assign({},o),{text:e})):o)),this._commit(this.todos)}deleteTodo(t){this.todos=this.todos.filter((({id:e})=>e!==t)),this._commit(this.todos)}toggleTodo(t){this.todos=this.todos.map((e=>e.id===t?new s.default(Object.assign(Object.assign({},e),{complete:!e.complete})):e)),this._commit(this.todos)}getAllTodos(){return this.todos}}},61:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(){this.app=this.getElement("#root"),this.form=this.createElement("form"),this.input=this.createElement("input"),this.input.type="text",this.input.placeholder="Add todo",this.input.name="todo",this.submitButton=this.createElement("button"),this.submitButton.textContent="Submit",this.form.append(this.input,this.submitButton),this.title=this.createElement("h1"),this.title.textContent="Todos",this.todoList=this.createElement("ul","todo-list"),this.app.append(this.title,this.form,this.todoList),this._temporaryTodoText="",this._initLocalListeners()}_todoText(){return this.input.value}_resetInput(){this.input.value=""}createElement(t,e){const o=document.createElement(t);return e&&o.classList.add(e),o}getElement(t){return document.querySelector(t)}displayTodos(t){for(;this.todoList.firstChild;)this.todoList.removeChild(this.todoList.firstChild);if(0===t.length){const t=this.createElement("p");t.textContent="Nothing to do! Add a task?",this.todoList.append(t)}else t.forEach((t=>{const e=this.createElement("li");e.id=t.id;const o=this.createElement("input");o.type="checkbox",o.checked=t.complete;const i=this.createElement("span");if(i.contentEditable="true",i.classList.add("editable"),t.complete){const e=this.createElement("s");e.textContent=t.text,i.append(e)}else i.textContent=t.text;const s=this.createElement("button","delete");s.textContent="Delete",e.append(o,i,s),this.todoList.append(e)}))}_initLocalListeners(){this.todoList.addEventListener("input",(t=>{"editable"===t.target.className&&(this._temporaryTodoText=t.target.innerText)}))}bindAddTodo(t){this.form.addEventListener("submit",(e=>{e.preventDefault(),this._todoText()&&(t(this._todoText()),this._resetInput())}))}bindDeleteTodo(t){this.todoList.addEventListener("click",(e=>{var o;if("delete"===e.target.className){const i=null===(o=e.target.parentElement)||void 0===o?void 0:o.id;i&&t(i)}}))}bindEditTodo(t){this.todoList.addEventListener("focusout",(e=>{var o;if(this._temporaryTodoText){const i=null===(o=e.target.parentElement)||void 0===o?void 0:o.id;i&&(t(i,this._temporaryTodoText),this._temporaryTodoText="")}}))}bindToggleTodo(t){this.todoList.addEventListener("change",(e=>{var o;if("checkbox"===e.target.type){const i=null===(o=e.target.parentElement)||void 0===o?void 0:o.id;i&&t(i)}}))}}}},e={};!function o(i){var s=e[i];if(void 0!==s)return s.exports;var d=e[i]={exports:{}};return t[i].call(d.exports,d,d.exports,o),d.exports}(859)})();