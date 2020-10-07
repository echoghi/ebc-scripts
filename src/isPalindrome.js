// Determine whether an integer is a palindrome.
// An integer is a palindrome when it reads the same backward as forward.
export default function isPalindrome(x) {
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
