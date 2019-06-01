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
  lookup(value) {
    let set = false;
    let trav = this.root;
    if(!this.root) {
      return set;
    } else {
      while (set === false) {
        if (trav.value === value) {
          return trav;
        } else {
          if (value > trav.value) {
            if (trav.right !== null) {
              trav = trav.right;
            } else {
              return set;
            }
          } else {
            if (trav.left !== null) {
              trav = trav.left;
            } else {
              return set;
            }
          }
        }
      }
    }
    console.log(set);
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))
tree.lookup(9);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
