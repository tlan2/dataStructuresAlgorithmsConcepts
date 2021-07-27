# Tom Lancaster - July 2021
# Example - Code Using Array
# Source: https://www.codesdope.com/course/data-structures-binary-trees/
'''
         D
        / \
       /   \
      /     \
     A       F
    / \     / \
   /   \   /   \
  E     B R     T
 / \     /     / \
G   Q   V     J   L
'''
# Max Number of Nodes possible
complete_node = 15

tree = [None, 'D', 'A', 'F', 'E', 'B', 'R', 'T', 'G', 'Q', None, None, 'V', None, 'J', 'L']

def get_right_child(index):
    # node is not null
    # and the result must lie within the number of nodes for a complete binary tree
    if tree[index] != None and ((2 * index) + 1)<= complete_node:
        return (2 * index) + 1
    # right child doesn't exist
    return -1

def get_left_child(index):
    # Boundary constraints
    if tree[index] is not None and (2 * index)<=complete_node:
        return 2*index
    # left child doesn't exist
    return -1

def get_parent(index):
    if tree[index] is not None and index/2 is not None:
        return index//2
    return -1

# Example 3 - Code Using Linked Representation
class TreeNode:
def __init__(self, data):
  self.data = data
  self.right = None
  self.left = None
  self.parent = None
