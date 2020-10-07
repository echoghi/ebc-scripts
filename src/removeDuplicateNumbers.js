// Given a sorted array nums,
// remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.
export default function removeDuplicateNumbers(nums) {
    nums.sort();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const nextNum = nums[+i + 1];

        if (num === nextNum) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums;
}
