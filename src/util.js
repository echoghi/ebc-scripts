function alphabetizeString(letters) {
    return letters
        .split('')
        .sort()
        .join('');
}

function isAnagram(s, t) {
    if (alphabetizeString(s) === alphabetizeString(t)) {
        return true;
    }

    return false;
}

// Given a list of non negative integers, arrange them such that they form the largest number.
function largestNumber(nums) {
    const result = nums
        .map(String)
        .sort((a, b) => b + a - (a + b))
        .join('');

    if (+result) {
        return result;
    }

    return '0';
}

// Given a sorted array nums,
// remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.
function removeDuplicateNumbers(nums) {
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

// Determine whether an integer is a palindrome.
// An integer is a palindrome when it reads the same backward as forward.
function isPalindrome(x) {
    if (
        x.toString() ===
        x
            .toString()
            .split('')
            .reverse()
            .join('')
    ) {
        return true;
    }

    return false;
}

// Given an array of integers,
// return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
function twoSum(nums, target) {
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

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.
// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
function threeSum(nums) {
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

export default {
    alphabetizeString,
    isAnagram,
    removeDuplicateNumbers,
    largestNumber,
    isPalindrome,
    twoSum,
    threeSum
};
