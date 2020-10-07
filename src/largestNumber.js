// Given a list of non negative integers, arrange them such that they form the largest number.
export default function largestNumber(nums) {
    const result = nums
        .map(String)
        .sort((a, b) => b + a - (a + b))
        .join('');

    if (+result) {
        return result;
    }

    return '0';
}
