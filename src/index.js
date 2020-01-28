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
}

export default { alphabetizeString, isAnagram, removeDuplicateNumbers };
