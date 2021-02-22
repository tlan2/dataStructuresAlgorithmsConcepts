// Tom Lancaster (c) February 2021
// trees.js - Data Structure

// ######## Class #######
class treeNode {
    constructor(number){
        this.data = number;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if(value <= this.data){
            if(this.left === null){
                this.left = new treeNode(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if(this.right === null){
                this.right = new treeNode(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    contains(value) {
        if(value === this.data){
            return true;
        } else if (value < this.data) {
            if(this.left === null) {
                return false;
            } else {
                return this.left.contains(value);
            }
        } else {
            if (this.right === null) {
                return false;
            } else {
                return this.right.contains(value);
            }
        }
    }

    printInOrder() {
        if (this.left != null) {
            this.left.printInOrder();
        }
        console.log(this.data);
        if (this.right != null){
            this.right.printInOrder();
        }
    }

    printPreOrder() {
        console.log(this.data);
        if (this.left != null) {
            this.left.printPreOrder();
        }
        if (this.right != null) {
            this.right.printPreOrder();
        }
    }

    printPostOrder() {
        if (this.left != null) {
            this.left.printPostOrder();
        }
        if (this.right != null) {
            this.right.printPostOrder();
        }
        console.log(this.data);
    }
}

// Tests
console.log('\n######## Tests ########\n');

console.log('Test 1: Create root, search and print it');
const root = new treeNode(10);
console.log("root.contains(10) = " + root.contains(10));
console.log("--- Print In Order ---");
root.printInOrder();

console.log("Test 2: Insert value, search and print it");
console.log("Insert the value 5");
root.insert(5);
console.log("root.contains(5) = " + root.contains(5));
console.log("--- Print In Order ---");
console.log("Should print 5, 10")
root.printInOrder();

console.log("Test 3: Insert multiple values, Search for them and Print In-Order");
console.log("In-order traversal means to \"visit\" (often, print) the left branch, then the current node, and finally, the right branch.")
console.log("Insert the value 15 then 8");
root.insert(15);
root.insert(8);
console.log("root.contains(15) = " + root.contains(15));
console.log("root.contains(8) = " + root.contains(8));
console.log("--- Print In Order ---");
console.log("Should print 5, 8, 10, 15")
root.printInOrder();

console.log("Test 4: Print Pre-Order");
console.log("Pre-order traversal visits the current node before its child nodes (hence the name \"pre-order\").")
console.log("Should print 10, 5, 8, 15")
root.printPreOrder();

console.log("Test 5: Print Post-Order");
console.log("Post-order traversal visits the current node after its child nodes (hence the name \"post order\"). In a post-order traversal, the root is always the last node visited.")
console.log("Should print 8, 5, 15, 10")
root.printPostOrder();

