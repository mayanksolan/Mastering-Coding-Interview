class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  function traverse(root) {
    if (root === null) {
      return 1;
    } else {
      if (root.left != null) {
        traverse(root.left);
      }
  
      if (root.right != null) {
        traverse(root.right);
      }
      console.log(root.value);
    }
  }
  
  function isUnivalTree(root) {
    if (root == null) {
      return true;
    } else {
      let temp = root.value;
      if (root.left !== null) {
        if (root.left.value !== temp) {
          return false;
        } else {
          if (isUnivalTree(root.left) == false) {
            return false;
          }
        }
      }
      if (root.right !== null) {
        if (root.right.value !== temp) {
          return false;
        } else {
          if (isUnivalTree(root.right) == false) {
            return false;
          }
        }
      }
    }
    return true;
  }
  
  
  let root = new Node(2);
  root.left = new Node(2);
  root.right = new Node(2);
  root.left.left = new Node(5);
  root.left.right = new Node(2);
  isUnivalTree(root);