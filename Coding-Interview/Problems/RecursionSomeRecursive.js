function someRecursive(arr, func) {
  if (arr.length === 0) {
    return false;
  } else {
    if (func(arr[0])) {
      return true;
    } else {
      return someRecursive(arr.slice(1), func);
    }
  }
}

const isOdd = val => val % 2 !== 0;

someRecursive([1, 2, 3, 4], isOdd);
