// Given an array of integers,
// return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
export default function twoSum(nums, target) {
    let numMap = {};

    for (let i = 0; i < nums.length; i++) {
        numMap[nums[i]] = i;
    }

    for (let j = 0; j < nums.length; j++) {
        const diff = target - nums[j];

        // eslint-disable-next-line no-prototype-builtins
        if (numMap.hasOwnProperty(diff) && numMap[diff] !== j) {
            return [j, numMap[diff]];
        }
    }
}
