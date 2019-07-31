class maxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let ind = this.values.length - 1;
    let parentInd = Math.floor((ind - 1) / 2);
    while (this.values[ind] > this.values[parentInd]) {
      console.log(this.values);
      this.swap(this.values, ind, parentInd);
      ind = parentInd;
      parentInd = Math.floor((ind - 1) / 2);
    }
  }
  swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  traverse() {
    console.log(this.values);
  }
  extractMax() {
    this.swap(this.values, 0, this.values.length - 1);
    console.log(this.values);
    let max = this.values.pop();
    if (this.values.length > 0) {
      let parentInd = 0;
      const element = this.values[parentInd];
      while (true) {
        let leftInd = 2 * parentInd + 1;
        let rightInd = 2 * parentInd + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftInd < this.values.length) {
          leftChild = this.values[leftInd];
          if (leftChild > element) {
            swap = leftInd;
          }
        }
        if (rightInd < this.values.length) {
          rightChild = this.values[rightInd];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightInd;
          }
        }
        if (swap === null) break;
        this.values[parentInd] = this.values[swap];
        this.values[swap] = element;
        parentInd = swap;
      }
      console.log(this.values);
      return max;
    }
  }
}

const heap = new maxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.traverse();
heap.insert(1);
heap.traverse();
heap.insert(45);
heap.traverse();
heap.extractMax();
heap.extractMax();
