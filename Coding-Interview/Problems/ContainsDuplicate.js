function containsDuplicate(nums) {
  for(let i=0; i<nums.length; i++) {
    if(nums.slice(0,i).includes(nums[i]) || nums.slice(i+1,nums.length).includes(nums[i]))  {
      console.log(nums[i]);
      return true;
    }
  }
  return false;
}

containsDuplicate([1,3,4,3,2,4,2]);

function containsDuplicate2(nums) {
  return (new Set(nums).size !== nums.length);
}

containsDuplicate2([0]);
