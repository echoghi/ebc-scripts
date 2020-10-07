export default function quickSort(array) {
    const pivot = (arr, start = 0, end = arr.length + 1) => {
        const swap = (list, a, b) => {
            if (!list[a] || !list[b]) return;
            return ([list[a], list[b]] = [list[b], list[a]]);
        };

        let pivot = arr[start],
            pointer = start;

        for (let i = start; i < end; i++) {
            if (arr[i] < pivot) {
                pointer++;
                swap(arr, pointer, i);
            }
        }
        swap(arr, start, pointer);

        return pointer;
    };

    const sortHelper = (array, start = 0, end = array.length) => {
        let pivotIndex = pivot(array, start, end);

        if (start >= end) return array;
        sortHelper(array, start, pivotIndex);
        sortHelper(array, pivotIndex + 1, end);

        return array;
    };

    sortHelper(array);
}
