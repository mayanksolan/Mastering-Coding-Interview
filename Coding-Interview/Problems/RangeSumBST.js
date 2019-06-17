class Node {
    constructor(val) {
      this.left = null;
      this.right = null;
      this.val = val;
    }
  }
  
  function traverse(root) {
    if (root === null) {
      return 1;
    } else {
      console.log(root.val);
      if (root.left != null) {
        traverse(root.left);
      }
      if (root.right != null) {
        traverse(root.right);
      }
    }
  }
  
  function rangeSumBST(root, L, R) {
    if (root == null) {
      return 0;
    }
    if (root.val > R) {
      return rangeSumBST(root.left, L, R);
    } else if (root.val < L) {
      return rangeSumBST(root.right, L, R);
    } else {
      return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
    }
  }
  
  function isUnivalTree(root) {
    if (root == null) {
      return true;
    } else {
      if (root.left !== null) {
        if (root.left.val !== root.val) {
          return false;
        } else {
          if (isUnivalTree(root.left) == false) {
            return false;
          }
        }
      }
      if (root.right !== null) {
        if (root.right.val !== root.val) {
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
  
  
  let root = new Node(10);
  root.left = new Node(5);
  root.right = new Node(15);
  root.left.left = new Node(3);
  root.left.right = new Node(7);
  //root.right.left = new Node(null);
  root.right.right = new Node(18);
  rangeSumBST(root,7,15);