class ListNode {
    constructor(data) {
       // 2 components of Node
    }
}

class LinkedList {
    constructor(head = null) {
        
    }

    size() {
        
    }

    clear() {
       
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
       
    }

    getFirst() {  };

    getAt(index) {
        // return node or nothing
        
    }

    insertAtTheBeginning(data)
    {
        
    }

    insertAtTheEnd(data)
    {

        // Empty List
        

        // Find last node and insert
        
    }

    insertAt(data, index){
        // Empty List
       
        // First Node

        // Other Index Locations
        
    }

    deleteFirstNode(){
        // Empty List
        if(!this.head){
            return;
        }
        // Delete existing first node
        
    }

    deleteLastNode() {
        // Empty List
        

        // Only 1 Node in List
        
        // All other cases
        
    }

    deleteAt(index) {
        // Empty List
        

        // First Node
        

        // All other index positions
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