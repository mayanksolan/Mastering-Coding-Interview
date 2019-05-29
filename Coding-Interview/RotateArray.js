function rotateArray(nums, k) {
  for(let i=0; i<k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
}

rotateArray([1,2,3,4,5,6,7], 3);

function rotateArray2(nums, k) {
  console.log(nums);
  let nop = nums.slice(-k,nums.length);
  console.log(nop);
  let pop = nums.slice(0,nums.length-k);
  console.log(pop);
  return nums.slice(-k,nums.length).concat(nums.slice(0,nums.length-k));
}

rotateArray2([1,2,3,4,5,6,7], 3);
//rotateArray2([-1,-100,3,99], 2);

function rotateArray3(nums, k) {
  console.log(nums);
  let nop = nums.slice(0,nums.length-k);
  console.log(nop);
  nums = nums.splice(-k,nums.length);
  console.log(nums);
  nums.push(...nop);
  console.log(nums);
}

rotateArray3([1,2,3,4,5,6,7], 3);
//rotateArray3([-1,-100,3,99], 2);
