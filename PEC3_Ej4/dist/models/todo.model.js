"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor({ text, complete } = { text: '', complete: false }) {
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete || false;
    }
    uuidv4() {
        /* return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
        ); */
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
exports.default = Todo;
