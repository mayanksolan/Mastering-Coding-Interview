const arr = [100, 200, 300, 400];
//[-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum);
  return maxSum;
}

maxSubarraySum(arr, 2);
