let arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivotInd = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[start] > arr[i]) {
      pivotInd++;
      swap(arr, pivotInd, i);
    }
  }
  swap(arr, pivotInd, start);
  //console.log(pivotInd);
  return pivotInd;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotInd = pivot(arr, left, right); //6
    quickSort(arr, left, pivotInd - 1);
    quickSort(arr, pivotInd + 1, right);
  }
  console.log(arr);
  return arr;
}

quickSort(arr, 0, arr.length - 1);
