function productOfArray(arr) {
  if (arr.length <= 0) {
    return 1;
  } else {
    console.log(arr, arr[0], arr.slice(1));
    return arr[0] * productOfArray(arr.slice(1));
  }
}

productOfArray([2, 4, 8, 16]);
