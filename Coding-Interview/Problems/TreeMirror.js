class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    let set = false;
    if (this.root === null) {
      this.root = newNode;
    } else {
      let trav = this.root;
      while (set === false) {
        if (value > trav.value) {
          if (trav.right !== null) {
            trav = trav.right;
          } else {
            trav.right = newNode;
            set = true;
          }
        } else {
          if (trav.left !== null) {
            trav = trav.left;
          } else {
            trav.left = newNode;
            set = true;
          }
        }
      }
    }
  }
  treeMirror(node) {
    if (node === null) {
      return null;
    } else {
      const newNode = new Node(node.value);
      newNode.left = this.treeMirror(node.right);
      newNode.right = this.treeMirror(node.left);
      return newNode;
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
//tree.insert(90);
tree.insert(15);
tree.insert(1);
//tree.insert(85);
//tree.insert(82);
tree.insert(95);
//JSON.stringify(traverse(tree.root))
//tree.lookup(9);
//tree.remove(20);
//console.log(tree);
JSON.stringify(traverse(tree.root));
const newnew = tree.treeMirror(tree.root);
JSON.stringify(traverse(newnew));

//     9
//  4     20
//1  6  15  95
//

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
