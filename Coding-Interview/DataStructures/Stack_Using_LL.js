class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if(this.isEmpty()) {
      console.log("Stack is Empty")
    } else {
      console.log(this.top);
    }
  }
  push(value){
    const newNode = new Node(value);
    if(this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
    } else {
      const holdPointer = this.top;
      this.top = newNode;
      this.top.next = holdPointer;
      this.length++;
    }
    return this;
  }
  pop(){
    if(!this.top) {
      return null;
    }
    if(this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
  }
  isEmpty(){
    if(this.top === null) {
      return true;
    } else {
      return false;
    }
  }
  printList(){
    let trav = this.top;
    let arr = [];
    while(trav !== null) {
       arr.push(trav.value);
       trav = trav.next;
    }
    console.log(arr);
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.printList();
myStack.pop();
myStack.printList();
myStack.peek();

//Discord
//Udemy
//google
