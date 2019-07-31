class maxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
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
}

const heap = new maxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
heap.insert(55);
heap.traverse();
heap.insert(1);
heap.traverse();
heap.insert(45);
heap.traverse();
