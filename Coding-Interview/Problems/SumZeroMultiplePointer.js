const arr = [1, 2, 3];

function sumZero(arr) {
  let retArr = [];
  let start = 0,
    end = arr.length - 1;
  while (start !== end) {
    console.log(`${arr[start]} ${arr[end]}`);
    if (arr[start] < 0 && arr[end] > 0) {
      if (arr[start] + arr[end] === 0) {
        (retArr[0] = arr[start]), (retArr[1] = arr[end]);
        console.log(retArr);
        return retArr;
      }
      if (Math.abs(arr[start]) < arr[end]) {
        end--;
      } else if (Math.abs(arr[start]) > arr[end]) {
        start++;
      }
    } else {
      console.log(false);
      return undefined;
    }
  }
}

sumZero(arr);
