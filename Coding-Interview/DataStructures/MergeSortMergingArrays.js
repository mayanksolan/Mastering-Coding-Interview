function merge(arr1, arr2) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  console.log(res);
  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 24, 76, 73, 72, 1, 9]);
