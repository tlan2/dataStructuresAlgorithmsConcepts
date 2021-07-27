# Tom Lancaster - July 2021
# Example - Code Using Linked Representation
# Source: https://www.codesdope.com/course/data-structures-binary-trees/

class TreeNode:
    def __init__(self, data):
        self.data = data
        self.right = None
        self.left = None
        self.parent = None

class Tree:
    def __init__(self, n):
        self.root = n

if __name__ == '__main__':
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

d = TreeNode('D')
a = TreeNode('A')
f = TreeNode('F')
e = TreeNode('E')
b = TreeNode('B')
r = TreeNode('R')
t1 = TreeNode('T')
g = TreeNode('G')
q = TreeNode('Q')
v = TreeNode('V')
j = TreeNode('J')
l = TreeNode('L')

t = Tree(d)

t.root.right = f
t.root.left = a

'''

       D
      / \
     /   \
    /     \
   A       F
'''

a.right= b
a.left = e

f.right = t1
f.left = r

e.right = q
e.left = g

r.left = v

t.right = l
t.left = j
