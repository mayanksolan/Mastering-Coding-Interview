// class Node {
//   constructor(value) {
//     this.value=value,
//     this.next=null
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    const newNode = {
      value:value,
      next:null
    }
    this.tail.next = newNode;
    this.tail = newNode
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value:value,
      next:null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    let arr = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  insert(index, value) {
    if(index>=this.length) {
      return this.append(value);
    }
    const newNode = {
      value:value,
      next:null
    }
    let currentNode = this.traverseToIndex(index-1);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if(index > this.length) {
      return "Index exceeding the length";
    }
    let currentNode = this.traverseToIndex(index-1);
    currentNode.next = currentNode.next.next;
    this.length--;
  }

  reverse() {
    if(this.head === this.tail) {
      return this.printList();
    }
    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    for(let i=0; i<index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

const myLL = new LinkedList(43);
myLL.append(5);
myLL.append(16);
myLL.prepend(2);
myLL.prepend(4);
myLL.printList();
myLL.insert(2,99);
myLL.printList();
myLL.insert(20,88);
myLL.printList();
myLL.remove(4);
myLL.printList();
myLL.remove(100);
myLL.printList();
myLL.reverse();
myLL.printList();
