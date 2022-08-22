/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * TODO: implement this method
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) { 
        this.items.push(item);

        return this.items.length;
    }

    /**
     * TODO: implement this method
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() { 
        if(this.isEmpty()) return null;
        else {
            return this.items.pop();
        }
    }

    /**
     * TODO: implement this method
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() { 
        return this.items[this.items.length - 1];
    }

    /**
     * TODO: implement this method
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        return this.items[0] == null;
    }

    /**
     * TODO: implement this method
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { 
        return this.items.length;
    }
}

// var newStack = new Stack();
// console.log(newStack.push(1));
// console.log(newStack.push(5));
// console.log(newStack.push(20));

// console.log(newStack.pop());
// console.log(newStack.peek());
// console.log(newStack.size())

class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }

    /**
     * TODO: implement this method
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) { 
        var node = new StackNode(item);
        if(this.isEmpty()) {
            this.head = node;
        }

        else {
            var temp = this.head;
            this.head = node;
            node.next = temp;
        }
        return this.size();


    }

    /**
     * TODO: implement this method
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() { 
        if(this.head == null) return null;
        else {
            var temp = this.head;
            this.head = this.head.next;
        }
        return temp;
    }

    /**
     * TODO: implement this method
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() { 
        return this.head;
    }

    /**
     * TODO: implement this method
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        return this.head == null;
    }

    /**
     * TODO: implement this method
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { 
        var count = 0;
        var current = this.head;
        while(current) {
            current = current.next;
            count++;
        }
        return count;
    }
}

var list = new LinkedListStack();
console.log(list.isEmpty());
console.log(list.peek());
// console.log(list.push(10));
// console.log(list.push(20));
// console.log(list.push(30));
// // console.log(list.peek());
// // console.log(list.pop());
// console.log(list.size());



