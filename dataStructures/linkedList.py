# Tom Lancaster - July 2021
# Example - Linked Lists
# Source: https://www.codesdope.com/course/data-structures-linked-lists/

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self,data):
        a = Node(data)
        self.head = a


def traversal(ll):
    temp = ll.head
    a = ''
    while temp is not None:
        a = a + str(temp.data) + '\t'
        temp = temp.next
    print(a)


def insert_at_beginning(ll, n):
    n.next = ll.head
    ll.head = n


def insert_at_end(ll, n):
    temp = ll.head
    while temp.next is not None:
        temp = temp.next

    temp.next = n


def insert_node_after(n, a):
    n.next = a.next
    a.next = n


def delete(ll, n):
    temp = ll.head
    if temp == n:  # node to be deleted is head
        ll.head = n.next
    else:  # node to be deleted is not head
        while temp is not None:
            if temp.next == n:
                temp.next = n.next  # linking
                del n
                break
            temp = temp.next


if __name__ == '__main__':
    ll = LinkedList(10)

    a = Node(20)
    b = Node(50)
    c = Node(60)

    ll.head.next = a
    a.next = b
    b.next = c

    traversal(ll)

    z = Node(0)
    insert_at_beginning(ll, z)
    z = Node(-10)
    insert_at_beginning(ll, z)

    z = Node(100)
    insert_at_end(ll,z)

    z = Node(30)
    insert_node_after(z, a)
    z = Node(40)
    insert_node_after(z, a.next)
    z = Node(500)
    insert_node_after(z, a.next.next)

    traversal(ll)

    delete(ll, ll.head)

    delete(ll, z)

    traversal(ll)

