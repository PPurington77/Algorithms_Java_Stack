/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * TODO: implement this method
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) { 
        this.items.push(item);
        return this.size();
    }

    /**
     * TODO: implement this method
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() { 
        return this.items.shift();
    }

    /**
     * TODO: implement this method
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() { 
        return this.items[0];
    }

    /**
     * TODO: implement this method
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        return this.items[0]==null;
    }
        

    /**
     * TODO: implement this method
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { 
        return this.items.length;
    }

}

// var test = new Queue();
// console.log(test.enqueue(10));
// console.log(test.enqueue(20));
// console.log(test.enqueue(30));
// console.log(test.dequeue());
// // console.log(test.isEmpty());
// // console.log(test.front());
// console.log(test.size());
// console.log(test);


class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        // In order to maintain an O(1) enqueue time complexity like .push with an array
        // We add a tail to our linked list so we can go directly to the last node
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * TODO: implement this method
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) { 
        var node = new QueueNode(item);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }

        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this.size;
    }

    /**
     * TODO: implement this method
     * Notice how this Time Complexity of this algo is O(1) not O(n) like the array version
     * Removes and returns the first item of this queue.
     * - Time: O(1) constant.
    * - Space: O(1) constant.
    * @returns {any} The removed item.
    */
    dequeue() { 
        if(this.isEmpty()) return undefined;

        else {
            var head = this.head;
            this.head = this.head.next;
            this.size--;
            
            return head.data;
        }


    }

    /**
     * TODO: implement this method
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() { 
        return this.head.data;
    }

    /**
     * TODO: implement this method
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        return this.head == null;
    }

    /**
     * TODO: implement this method
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    long() { 
        return this.size;
    }

}

var newList = new LinkedListQueue();
console.log(newList.isEmpty());
console.log(newList.enqueue(10));
console.log(newList.isEmpty());
console.log(newList.enqueue(20));
console.log(newList.enqueue(30));
console.log(newList.enqueue(40));
console.log(newList.dequeue());
console.log(newList.long());
console.log(newList.front());
