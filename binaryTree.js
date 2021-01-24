/*

Binary Search Tree!

Name your class Tree. 

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

There is a tree visualization helper. It will tell show you how your tree looks as you create it. In order
for this to work and for the unit tests to pass you, you must implement a Tree .toObject function that returns
your tree as a series of nested objects. Those nested objects must use the following names for their properties

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

As always, you can change describe to xdescribe to prevent the unit tests from running

*/

class Tree {
constructor(){
    this.root = null
}

toObject(){
    return this.root
}

travesTheTree(node,root){
    if(root){
    if(node.value > root.value){
        if(root.right){
        this.travesTheTree(node,root.right)
        }else{
        root.right = node
        }
    }else{
        if(root.left){
        this.travesTheTree(node,root.left)
        }else{
        root.left = node
        }
    }
    }else{
    this.root = node
    }
}

add(value){
    const newNode = new Node(value)
    this.travesTheTree(newNode,this.root)
}
}
  
class Node{
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}
  
const nums = [3,7,4,6,5,1,10,2,9,8];
const tree = new Tree();
nums.map( num => tree.add(num));
