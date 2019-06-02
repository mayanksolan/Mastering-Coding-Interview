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
  remove(value) {
    let trav = this.root;
    let head = trav;
    while(trav.value !== value) {
      if(value > trav.value) {
        if(trav.right !== null) {
          head = trav;
          trav = trav.right;
        } else {
          return false;
        }
      } else {
        if(trav.left !== null) {
          head = trav;
          trav = trav.left;
        } else {
          return false;
        }
      }
    }
    //console.log("trav", trav, "head", head);
    if(trav.left === null && trav.right === null) {
      head.right = null;
    } else {
      let tLeft;
      if(trav.left !== null) {
        tLeft = trav.left;
      }
      if(trav.right !== null) {
        let tRight = trav.right;
        let tRightLeft = tRight.left;
        while(tRightLeft.left !== null) {
          tRightLeft = tRightLeft.left;
        }
        // console.log("head", head);
        // console.log("trav", trav);
        // console.log("tRight", tRight);
        // console.log("tRightLeft", tRightLeft);
        // console.log("tLeft", tLeft);
        head.right = tRightLeft;
        tRightLeft.right = tRight;
        tRightLeft.left = tLeft;
      } else {
        head.right = trav.left;
      }
    }
    return this;
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(90)
tree.insert(15)
tree.insert(1)
tree.insert(85)
tree.insert(82)
tree.insert(95)
//JSON.stringify(traverse(tree.root))
//tree.lookup(9);
tree.remove(20);
console.log(tree);
// JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
