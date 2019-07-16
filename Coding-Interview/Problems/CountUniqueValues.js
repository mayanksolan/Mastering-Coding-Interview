const arr = [-2, -1, -1, 0, 1];

function countUniqueValues(arr) {
  let retArr = [];
  if (arr.length === 0) {
    return 0;
  } else {
    retArr = [arr[0]];
    let ai = 1,
      ri = 0;
    while (ai < arr.length) {
      if (arr[ai] !== retArr[ri]) {
        ri++;
        retArr[ri] = arr[ai];
        ai++;
      } else {
        ai++;
      }
    }
  }
  return retArr.length;
}

countUniqueValues(arr);
