let nums1 = [1,2];
let nums2 = [3,4]

var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [];
    let i=0, j=0;
    for(let k=0; k<nums1.length+nums2.length; k++) {
        if(i<nums1.length && j<nums2.length) {
            if(nums1[i]<nums2[j]) {
                nums.push(nums1[i]);
                i++;
            } else {
                nums.push(nums2[j]);
                j++;
            }
        } else if(i==nums1.length && j<nums2.length) {
            nums.push(nums2[j]);
            j++;
        } else if(i<nums1.length && j==nums2.length) {
            nums.push(nums1[i]);
                i++;
        }
        console.log(i, j, k, nums1.length, nums2.length, nums);
    }
    if(nums.length%2!=0) {
        console.log(nums[Math.floor(nums.length/2)]);
    } else {
        console.log((nums[nums.length/2-1] + nums[nums.length/2])/2);
    }
};

findMedianSortedArrays(nums1,nums2);

