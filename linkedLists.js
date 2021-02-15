// Tom Lancaster (c) February 2021
// linkedLists.js - Data Structure
//
// Purpose: To understand linked lists better by making one from scratch.
//
// *** Advantages ***
// 1. Can add or remove nodes easily without reorganizing the whole data structure.
//
// *** Disadvantages *** 
// 1. Search operation is slow since you have to sequentially go over the list.
// 2. Uses more storage space due to storing pointers

class ListNode {
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

// LinkedList is comprised of a chain of connecting ListNodes
class LinkedList {
   constructor(head = null){
       this.head = head;
   }

    size() {
        let count = 0;
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }

    clear () {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
       return this.head;
    }

    getAtByData(data) {
       let node = this.head;
       let counter = 0; 
       while(node) {
           console.log('getAtByData_node.data = ' + node.data)
           if (node.data === data) {
               console.log('getAtByData_counter = ' + counter);
               return counter;
           }
           counter++;
           node = node.next;
       }
       return null;
    }

    getAtByIndex(index){
        if(index < 0){
            console.log('No index for value.')
            return null;
        }
        let node = this.head;
        for(let i=0; i < index; i++){
            node = node.next;
        }
        return node;
    }

    insert(data) {
        let newNode = new ListNode(data);
        let lastNode = this.getLast();
        lastNode.next = newNode;
    }

    delete(data) {
        if(!this.head) {
            console.log('No linked list exists.');
            return null;
        }

        //if only one node on in the list
        if(!this.head.next){
            this.head = null;
            return;
        }

        //else, use getAt helper functions to find previous node
        let index = this.getAtByData(data);
        const previous = this.getAtByIndex(index - 1);

        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;

        return this.head;   
    }

    printList() {
        let node = this.head;
        let counter = 1;
        while(node){
            if(!node.data){
                break;
            }
            console.log(counter + ' - ' + node.data);
            counter++;
            node = node.next;
        }
        return true;
    }

}

let node1 = new ListNode(10);
let node2 = new ListNode(9);
let node3 = new ListNode(8);
let node4 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new LinkedList(node1);

console.log('\n**** Tests ****\n')

console.log('Test 1: Print all nodes');
console.log('list.printList() = ' + list.printList());
console.log('\n')

console.log('Test 2: Second node exists and has data');
console.log('list.head.next.data = ' + list.head.next.data);
console.log('\n')

console.log('Test 3: All nodes created exist.')
console.log('list.size() = ' + list.size());
console.log('\n')

console.log('Test 4: Return last node')
let lastNode = list.getLast();
console.log('let lastNode = list.getLast();')
console.log('lastNode.data = ' + lastNode.data)
console.log('\n')

console.log('Test 5: Return first node')
let firstNode = list.getFirst();
console.log('let firstNode = list.getFirst();')
console.log('firstNode.data = ' + firstNode.data)
console.log('\n')

console.log('Test 6: Insert New Node')
list.insert(6);
console.log('list.insert(6);')
let insertedNode = list.getLast();
console.log('let insertedNode = list.getLast();')
console.log('insertedNode.data = ' + insertedNode.data)
console.log('\n')

console.log('Test 7: getAt functions works')
let testIndex7 = list.getAtByData(8);
let testNode7 = list.getAtByIndex(testIndex7);
console.log('let testIndex7 = list.getAtByData(8);');
console.log('let testNode7 = list.getAtByIndex(testIndex7);')
console.log('testNode7.data = ' + testNode7.data);
console.log('\n')

let head = list.getFirst();
let nextNode = head.next;
console.log('nextNode.data = ' + nextNode.data);
console.log('\n')

console.log('Test 8: Delete Node')
console.log('list.size() before delete = ' + list.size());
console.log('list.delete(8);')
list.delete(8);
console.log('list.size() after delete = ' + list.size());
console.log('list.delete(7);')
list.delete(7);
console.log('list.size() after delete = ' + list.size());
console.log('list.delete(9);')
list.delete(9);
console.log('list.size() after delete = ' + list.size());
console.log('list.printList() = ' + list.printList());
console.log('\n')

// console.log('Test #: Clear function removes all nodes from list')
// console.log('list.size() before clear = ' + list.size());
// list.clear();
// console.log('list.size() after clear = ' + list.size())
// console.log('\n')