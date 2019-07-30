// RADIX SORT PSEUDOCODE
// Define a function that accepts list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits
// For each iteration of the loop:
//    Create buckets for each digit (0 to 9)
//    place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// return list at the end!

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let mostD = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let digCou = digitCount(arr[i]);
    if (digCou > mostD) {
      mostD = digCou;
    }
  }
  return mostD;
}

function radixSort(arr) {
  let mostD = mostDigits(arr);
  for (let k = 0; k < mostD; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  console.log(arr);
}

//getDigit(12345, 5);
//digitCount(12345);
//mostDigits([1234, 56, 4]);
radixSort([
  3221,
  1,
  10,
  9680,
  577,
  9420,
  7,
  5622,
  4793,
  2030,
  3138,
  82,
  2599,
  743,
  4127
]);
