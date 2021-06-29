<!-- [Trees](#trees), [Tries](#tries), & [Graphs](#graphs) -->
# Data Structures, Algorithms, and Other CS Concepts

![Data Structures, Algorithms, and Other CS Concepts](images/header.jpeg)
## Table of Contents
* [About the Project](#about-the-project)
* [Built With](#built-with)

| [Data Structures](#data-structures) | Algorithms | [Concepts](#concepts) |
| :---: | :---: | :---: |
| [Linked Lists](#linked-lists) | Breadth-First Search | Bit Manipulation |
| [Trees](#trees), Tries, & Graphs | Depth-First Search | Memory (Stack vs. Heap) |
| Stacks & Queues | Binary Search | Recursion |
| Heaps | Merge Sort | Dynamic Programming |
| Vectors / ArrayLists | Quick Sort | [Big O Time & Space](#big-O-time-and-space) |
| Hash Tables | Union Find | |
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About the Project
In order to enhance my coding skills and perform well in technical interviews, as per recommendation by *Cracking the Coding Interview* Author Gayle McDowell (pgs. 60-61), I am coding all listed concepts in the table above from scratch.

## Built With
* [JavaScript (Wiki)](https://en.wikipedia.org/wiki/JavaScript)
# Data Structures
## Linked Lists
Singly Linked List
![Singly Linked List](images/singlyLinkedList.png)

Doubly Linked List

![Doubly Linked List](images/doublyLinkedList.png)

Circular Linked List

![Circular Linked List](images/circularLinkedList.jpg)

File: *dataStructures/linkedLists.js* 

A linked list is a data structure that represents a sequence of nodes. In a singly linked list, each node points to the next node in the linked list. A doubly linked list gives each node pointers to both the next node and the previous node.
<br/>
<br/>
It is conceptually the same as an array with the only difference bing the efficiency of various operations. Most importantly:
- Insertion in middle: O(1) for linked list, O(n) for array
- Direct access to middle element: O(n) for linked list, O(1) for array

| Pros | Cons |
| :---: | :---: |
| 1. Insertion/Deletion - Can add or remove nodes easily without reorganizing the whole data structure. | 1. Search/Access - Search operation is slow since you have to sequentially go over the list. | 
| |2. Space - Uses more storage space due to storing pointers

### Real-Life Examples
1. Conga Line (Metaphorical)
![Conga Line](images/conga_line.jpg)
2. Network Message Delivery (Singly Linked List)
Message is broken down into packets and each packet has a key to the next one.
<br/>![Network Message Deliver](images/packets.jpg)
3. Browser cache w/ Back Button (Doubly Linked List)
4. DNA Molecules (Doubly Linked List)
5. List of website users that need to be emailed an notification

### Big O
![Big O Table Header](images/bigOheader.png)
![Linked Lists](images/linkedListBigO.png)
<br/>

 
## Trees

![Tree Diagram](images/trees.png)

File: *dataStructures/binarySearchTree.js*

Report: *[Final Project Report](https://drive.google.com/file/d/15tfnANoty4ZpfQTqUiNw9XIQhUfkCtN-/view)* on B-trees, Red-Black trees, and Binary Search trees for Graduate Algorithms Course

A tree is a data structure composed of nodes that:
* Has a root node
* The root node has zero or more child nodes
* Each child node has zero or more child nodes
* Does not contain cycles
* May or may not be in a particular order
* Can have any data type as values
* May or may not have links back to their parent nodes
### Key Terms
* **Root**: top node of tree where all operations start
* **Node**: each item in the tree, usually key-value
* **Parent**: a node which is a *predecessor* of any node
* **Child**: a node which is a *descendant* of any ndoe
* **Siblings**: a group of nodes that have the same parent
* **Leaf**: a node without children
* **Level**: 1 + the number of edges between the node and the root
* **Height**: the number of edges from the root to its furthest leaf
* **Depth**: the number of edges from the node to the tree's root
* **Sub-tree**: a portion of the tree that can be viewed as a complete tree in itself
### Types of Trees
* **Binary / *n*-ary Tree**: 
    
    ![Binary Ternary Trees](images/binaryTernarytree.png)

    A binary tree is a tree in which each node has up to two children while an *n*-ary tree can have *n* possible children such ternary tree which has 3 children.
    
* **Binary *Search* Tree**: 
     
     ![Binary Search Tree & Not Binary Search Tree  Trees](images/bst.png)

    A binary search tree is a binary tree in which every node fits a specific ordering property: *all left descendents <= n < all right descendents*. This must be true for each node n. Duplicate values are sometimes permitted depending on the interviewer.
   
* **Balanced / Unbalanced Tree**:
     
     ![Balanced / Unbalanced Trees](images/balancedUnbalancedTree.png)

    Balanced tree means something more like “not terribly imbalance.” It is balanced enough to ensure *O(log n)* insert and find times.
    *Note: In interviews, assume you have a balanced tree.*
    - 2 common types of balanced trees:
        - Red-black trees
        - AVL trees

* **Complete Binary Tree**:
    
    ![Complete Binary Tree](images/completeBinaryTree.png)

    A complete binary tree is a binary tree in which every level of the tree is fully filled, except for perhaps the last level. To the extent that the last level is filled, it is filled left to right.

* **Full Binary Tree**:
    
    ![Full Binary Tree](images/fullBinaryTree.png)

    A full binary tree is a binary tree in which every node has either zero or two children. That is, no nodes have only one child.

* **Perfect Binary Tree**:

    ![Perfect Binary Tree](images/perfectBinaryTree.png)
    
    A perfect binary tree is one that is both full and complete. All leaf nodes will be at the same level, and this level has the maximum number of nodes. 
### Traversals
* In-Order
    - In-order traversal means to "visit" (often, print) the left branch, then the current node, and finally, the right branch. 
* Pre-Order
    - Pre-order traversal visits the current node before its child nodes (hence the name "pre-order"). 
* Post-Order
    - Post-order traversal visits the current node after its child nodes (hence the name "post order"). In a post-order traversal, the root is always the last node visited.     

### Big O
![Big O Table Header](images/bigOheader.png)
![Trees Big O](images/treesBigO.png)
<br/>

  


## Tries 
<hr>

![Tries Example](images/tries.png)
- A trie (sometimes called a prefix tree) is a variant of an n-ary tree in which characters are stored at each node. Each path down the tree may
represent a word.
- The * nodes (sometimes called "null nodes") are often used to indicate complete words. For example, the fact that there is a * node under MANY indicates that MANY is a complete word. The existence of the MA path indicates there are words that start with MA. 
- . In situations when we search
through the tree on related prefixes repeatedly (e.g., looking up M, then MA, then MAN, then MANY), we might pass around a reference to the current node in the tree. This will allow us to just check if Y is a child of MAN, rather than starting from the root each time. 

Real-Life Example(s)
1. Quick prefix lookups - While a hash
table can quickly look up whether a string is a valid word, it cannot tell us if a string is a prefix of any valid words. A trie can do this very quickly.


## Graphs
<hr>

A graph is a collection of nodes with edges between (some of) them.
![Vertices & Edges](images/graphEdgeVertex.png)
- Graphs can be directed or undirected. Directed are like 1-way streets and undirected are like 2 way streets.
![Directed & Undirected Graphs](images/directedUndirectedgraphs.png)
- A graph might consist of multiple isolated subgraphs. If there is a path between every pair of vertices, it is called a "connected graph."
![Subgraph](images/subgraph.png)
- A graph can have cycles. An "acyclic graph" is one without cycles.
![Graph w/ cycle & Acyclic Graph](images/cyclicAcyclicGraphs.png)
- Programmatically, there are two common ways to represent a graph:
    1. Adjacency List
        - Most common way to represent a graph. Node classes are usually used.
        - Every vertex/node stores a list of adjacent vertices.
        - Simple Class Definition
        ![Graph Class](images/graphClass.png)
    2. Adjacency Matrixes
        - NxN bolean matrix where N is the number of nodes. A true value at matrix[i][j] indicates an edge from node i to node j.
        - In an undirected grpah, an adjacency matrix will be symmetric. In a directed graph, it will not be.
- Graphs with adjacency may be somewhat less efficient. In the adjacency list representation, you can easily iterate through the neighbors of the node. In the adjacency matrix, you will need to iterate through all the nodes to identify a node's neighbors.

<!-- 
## Stacks 
<hr>

## Queues
<hr>

## Heaps
<hr>

## Vectors / ArrayLists
<hr>

## Hash Tables
<hr> -->

  
# Algorithms
## Breadth-First Search
<hr>

## Depth-First Search
<hr>

<!--
## Binary Search
<hr>

## Merge Sort
<hr>

## Quick Sort
<hr>

<br/>
-->
# Concepts
<!--  
## Bit Manipulation
<hr>

## Memory (Stack vs. Heap)
<hr>

## Recursion
<hr>

## Dynamic Programming
<hr>
-->
### Big O Time and Space
![Big O Complexity Chart](images/bigOComplexityChart.png)

File: *concepts/bigO.apkg* (Anki Deck)

### Time Complexity
* Big O is the language and metric that describes the efficiency of an algorithm
* If you don’t know it well, then:
    - You will be judged harshly by other programmers and colleagues
    - Struggle to judge whether your algorithm is getting faster or slower
* *Master Big O!*
* Some of most common runtimes are:
    - O(log N)
    - O(N log N)
    - O(N)
    - O(N^2)
    - O(2^N)
* You can have multiple variables in your runtime
    - To paint a fence that’s w meters wide and h meters high could be described as O(wh).
    - If you need p layers of paint, then the time is O(whp)
### Space Complexity
* The amount of memory required by an algorithm is also important.
* Parallel to time complexity
* An array of size n, requires O(n) space.
    - If 2D array of size n x n, requires O(n^2) space
# Contact
Tom Lancaster - thomas.m.lancaster@gmail.com
- [Portfolio](https://tlan2.github.io/portfolio/) 
- [LinkedIn](https://www.linkedin.com/in/thomasmorelancaster/) 
- [GitHub](https://github.com/tlan2)
# Acknowledgements
## General
- [Cracking the Coding Interview](https://www.crackingthecodinginterview.com)
## Data Structures
* Linked Lists
    - [How to Implement a Linked List in Java  (freecodecamp.com)](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)
    - [Linked Lists in JavaScript (codeburst.io)](https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3)
    - [Data Structures - Linked Lists  \[by Cracking the Coding Interiew author Gayle McDowell\] (YouTube)](https://www.youtube.com/watch?v=njTh_OwMljA)
    - [What is a practical, real world example of the Linked List? (stackoverflow)](https://stackoverflow.com/questions/644167/what-is-a-practical-real-world-example-of-the-linked-list)
* Trees, Tries, & Graphs
    - [Data Structures - Trees \[by Cracking the Coding Interiew author Gayle McDowell\] (YouTube)](https://www.youtube.com/watch?v=oSWTXtMglKE)
    - [Trees vs. Graphs (Open4Tech.com)](https://open4tech.com/trees-vs-graphs/)
* Stacks & Queues
* Heaps
* Vectors / ArrayLists
* Hash Tables
## Algorithms
* Breadth-First Search
* Depth-First Search
* Binary Search
* Merge Sort
* Quick Sort
## Concepts
* Bit Manipulation
* Memory (Stack vs. Heap)
* Recursion
* Dynamic Programming
* Big O Time & Space
    - [Cracking the Coding Interview](https://www.crackingthecodinginterview.com) - Ch VI - "Big O"
    - [bigOcheatsheet.com](https://www.bigocheatsheet.com)

