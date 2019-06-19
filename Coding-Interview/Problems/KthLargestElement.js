let nums = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6];
let k=4

var findKthLargest = function(nums, k) {
    /* for(let i=0; i<nums.length-1; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i]<nums[j]) {
                let temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
            }
        }
    } */
    nums.sort(function(a, b) {
        return a - b;
      });
    console.log(nums);
    //console.log(nums.sort());
};

findKthLargest(nums,k);