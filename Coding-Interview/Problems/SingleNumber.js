function singleNumber(nums) {
    for(let i=0; i<nums.length; i++) {
        if(!nums.slice(0,i).includes(nums[i]) && !nums.slice(i+1,nums.length).includes(nums[i])) {
            console.log(nums[i]);
        }
    }
}

//singleNumber([4,1,2,1,2]);

function singleNumber2(nums) {
    console.log(nums.reduce((prev,curr) => prev^curr));
}

singleNumber2([4,1,2,1,2]);