import alphabetizeString from './alphabetizeString';

export default function isAnagram(s, t) {
    if (alphabetizeString(s) === alphabetizeString(t)) {
        return true;
    }

    return false;
}
