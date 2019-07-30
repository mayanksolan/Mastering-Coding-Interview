// Pivot Pseudocode
// It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index
// Return the pivot index

// Quicksort Pseudocode
// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
// Your base case occurs when you consider a subarray with less than 2 elements

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
