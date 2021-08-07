# Tom Lancaster - July 2021
# Example - Code Using Linked Representation w/ Orders
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


def preorder(n):
    if n is not None:
        print(" " + n.data + " ")
        preorder(n.left)
        preorder(n.right)


def postorder(n):
    if n is not None:
        postorder(n.left)
        postorder(n.right)
        print(" " + n.data + " ")


def inorder(n):
    if n is not None:
        inorder(n.left)
        print(" " + n.data + " ")
        inorder(n.right)


if __name__ == '__main__':
    """
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
    """

    d = TreeNode('D')
    a = TreeNode('A')
    f = TreeNode('F')
    e = TreeNode('E')
    b = TreeNode('B')
    r = TreeNode('R')
    t = TreeNode('T')
    g = TreeNode('G')
    q = TreeNode('Q')
    v = TreeNode('V')
    j = TreeNode('J')
    l = TreeNode('L')

    tr = Tree(d)

    t.root.right = f
    t.root.left = a

'''

       D
      / \
     /   \
    /     \
   A       F
'''

a.right = b
a.left = e

f.right = t
f.left = r

e.right = q
e.left = g

r.left = v

t.right = l
t.left = j

print("Preorder:\n")
preorder(t.root)
print("\nPostorder:\n")
postorder(t.root)
print("\nInorder:\n");
inorder(t.root)
print("\n")



