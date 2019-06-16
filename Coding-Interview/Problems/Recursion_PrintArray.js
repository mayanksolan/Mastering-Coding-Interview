let arr = [4,1,6,3,7,5,9];

function printA(arr) {
  if(arr.length!=0) {
    console.log(arr[0]);
    printA(arr.slice(1,arr.length));
  }
}

printA(arr);