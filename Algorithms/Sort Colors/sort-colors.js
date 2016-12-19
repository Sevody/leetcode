/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    debugger
    let low = 0;
    let high = nums.length - 1;
    let tmp;
    for (let i = 0; i <= high;) {
        if (nums[i] === 0) {
            tmp = nums[low];
            nums[low] = nums[i];
            nums[i] = tmp;
            low++;
            i++;
        } else if (nums[i] === 1) {
            i++;
        } else (nums[i] === 2) {
            tmp = nums[high];
            nums[high] = nums[i];
            nums[i] = tmp;
            high--;
        }
    }
};
