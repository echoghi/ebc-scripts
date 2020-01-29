import { removeDuplicateNumbers } from 'lib';

describe('removeDuplicateNumbers()', () => {
    test('removes dupes', () => {
        const dupes = [1, 2, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 7];
        const result = [1, 2, 3, 4, 5, 6, 7];

        expect(removeDuplicateNumbers(dupes)).toEqual(result);
    });
});
