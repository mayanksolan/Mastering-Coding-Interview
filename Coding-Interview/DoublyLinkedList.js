// class Node {
//   constructor(value) {
//     this.value=value,
//     this.next=null
//   }
// }

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    const newNode = {
      value:value,
      next: null,
      prev: null
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value:value,
      next: null,
      prev: null
    }
    newNode.next = this.head;
    this.head.prev = newNode;
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
      next:null,
      prev:null
    }
    let currentNode = this.traverseToIndex(index-1);
    newNode.next = currentNode.next;
    currentNode.next.prev = newNode;
    currentNode.next = newNode;
    newNode.prev = currentNode;
    this.length++;
  }

  remove(index) {
    if(index > this.length) {
      return "Index exceeding the length";
    }
    let currentNode = this.traverseToIndex(index-1);
    currentNode.next = currentNode.next.next;
    currentNode.next.next.prev = currentNode;
    this.length--;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    for(let i=0; i<index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

const DLL = new DoublyLinkedList(43);
DLL.append(5);
DLL.printList();
DLL.append(16);
DLL.printList();
DLL.prepend(2);
DLL.printList();
DLL.prepend(4);
DLL.printList();
DLL.insert(2,99);
DLL.printList();
DLL.insert(20,88);
DLL.printList();
DLL.remove(4);
DLL.printList();
DLL.remove(100);
DLL.printList();
