class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null
    }

    printLinkedList() {
        console.log("====Current Linked List=====")
        let currentNode = this.head;
        let i = 1
        while(currentNode)
        {
            console.log("node #" + i + ": " + currentNode.data);
            currentNode = currentNode.next;
            i += 1;
        }
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() { return this.head };

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node){
            if (counter === index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    insertAtTheBeginning(data)
    {
        let newNode = new ListNode(data);

        newNode.next = this.head;

        this.head = newNode;

        return this.head;
    }

    insertAtTheEnd(data)
    {
        let newNode = new ListNode(data);

        // Empty List
        if(!this.head){
            this.head = newNode;
            return this.head;
        }

        // Find last node and insert
        let tail = this.head;
        while(tail.next){
            tail = tail.next;
        }
        tail.next = newNode;

        return this.head;
    }

    insertAt(data, index){
        // Empty List
        if(!this.head){
            this.head = new ListNode(data);
            return;
        }

        // First Node
        if (index === 0) {
            let previous = this.head;
            this.head = new ListNode(data);
            this.head.next = previous;
        }

        // Other Index Locations
        previous = this.getAt(index - 1);
        let newNode = new ListNode(data);
        newNode.next = previous.next;
        previous.next = newNode;

        return this.head;
    }

    deleteFirstNode(){
        // Empty List
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    }

    deleteLastNode() {
        // Empty List
        if(!this.head){
            return null;
        }

        // Only 1 Node in List
        if(!this.head.next){
            this.head = null;
            return;
        }

        // All other cases
        let previous = this.head;
        let tail = this.head.next;

        while(tail.next !== null){
            previous = tail;
            tail = tail.next;
        }

        previous.next = null;
        return this.head;
    }

    deleteAt(index) {
        // Empty List
        if (!this.head) {
            return;
        }

        // First Node
        if(index === 0) {
            this.head = this.head.next;
            return;
        }

        // All other index positions
        const previous = this.getAt(index -1);

        if (!previous || !previous.next){ return; }

        previous.next = previous.next.next;
        return this.head;
    }

}



// TEST CODE
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(5)
node1.next = node2
node2.next = node3

let list = new LinkedList(node1)

list.printLinkedList();
console.log("size = " + list.size());
console.log("getLast value = " + list.getLast().data)
console.log("\nInsert 3 at the beginning")
list.insertAtTheBeginning(3);
console.log("New head value = " + list.getFirst().data);
list.printLinkedList();

console.log("\nInsert 100 at the end")
list.insertAtTheEnd(100);
list.printLinkedList();

console.log("\nclear list");
list.clear()
console.log("list size after clear = " + list.size())