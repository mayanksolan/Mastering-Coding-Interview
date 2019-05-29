

class Stack {
  constructor(){
    this.arr = [];
  }
  peek() {
    return this.arr[this.arr.length-1];
  }
  push(value){
    this.arr.push(value);
  }
  pop(){
    if(this.arr.length===0) {
      console.log("Stack is already empty");
    } else {
      this.arr.pop();
    }
  }
  printList(){
    console.log(this.arr);
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
