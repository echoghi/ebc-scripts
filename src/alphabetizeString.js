export default function alphabetizeString(letters) {
    return letters
        .split('')
        .sort()
        .join('');
}
