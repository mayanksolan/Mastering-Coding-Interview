class hashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for(let i=0; i<key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address]=[];
    }
    this.data[address].push([key,value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currBucket = this.data[address];
    if(currBucket) {
      for(let i=0; i<currBucket.length; i++) {
        if(currBucket[i][0]===key) {
          return currBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for(let i=0; i<this.data.length; i++){
      if(this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHash = new hashTable(50);
myHash.set('grapes', 10000);
myHash.set('apples', 50);
myHash.set('oranges', 10);
myHash.keys();
