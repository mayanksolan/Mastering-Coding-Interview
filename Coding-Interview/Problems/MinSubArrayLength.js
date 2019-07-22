const arr = [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19];
//[-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubarraySum(arr, sum) {
  let minSum = 0;
  let tempSum = 0;
  //if (arr.length < num) return null;
  let i = 0;
  while (minSum < sum && i < arr.length) {
    minSum += arr[i];
    i++;
  }
  let len = i;
  console.log(minSum, len);
  console.log("-------------");
  tempSum = minSum;
  for (let i = 1; i < arr.length; i++) {
    tempSum = tempSum - arr[i - 1];
    if (tempSum >= sum && tempSum <= minSum) {
      minSum = Math.min(minSum, tempSum);
      len--;
    }
    // {
    //   if (i + len - 1 > arr.length - 1) {
    //     console.log(len);
    //     return len;
    //   } else
    else {
      tempSum = tempSum + arr[i + len - 1];
      minSum = Math.min(minSum, tempSum);
    }
    //}
    console.log(i, arr[i], tempSum, minSum, len);
  }
  console.log(len);
  return len;
}

maxSubarraySum(arr, 52);
