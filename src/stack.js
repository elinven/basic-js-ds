const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

let stack = [];
class Stack {
  constructor () {
    this.top = null;
    this.length = 0;
  }

  push(element) {
    //throw new NotImplementedError('Not implemented');
    // Если стек полон -- ошибка
    if (this.length === this.lastElementIndex + 1) {
      throw new Error('Stack is full');
    }

    // Добавление элемента в конец массива
    stack.push(element);

    // Увеличение индекса последнего элемента
    this.length++;
    this.top = stack[this.length];
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    let topelement = stack[this.length-1];
    stack.pop();
    this.length--;
    this.top = stack[this.length-1];
    return topelement;
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    return stack[this.length-1];
  }

}

module.exports = {
  Stack
};
