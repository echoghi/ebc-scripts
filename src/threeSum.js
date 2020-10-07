// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.
// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
export default function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const results = [];

    for (let indexA = 0; indexA < nums.length - 2; indexA++) {
        let indexB = indexA + 1;
        let indexC = nums.length - 1;
        let a = nums[indexA];

        if (a > 0) return results;
        if (a === nums[indexA - 1]) {
            continue;
        }

        while (indexB < indexC) {
            let b = nums[indexB];
            let c = nums[indexC];
            const sum = a + b + c;

            if (sum === 0) {
                results.push([a, b, c]);

                while (nums[indexC - 1] === c) {
                    indexC--;
                }
                while (nums[indexB + 1] === b) {
                    indexB++;
                }
                indexC--;
                indexB++;
            } else if (sum > 0) {
                indexC--;
            } else if (a + b + c < 0) {
                indexB++;
            }
        }
    }

    return results;
}
