class Solution {
    constructor() {}

    /**
     * Restore string order using selection Sort Algorithm
     * @param {string} s The string to restore.
     * @param {int[]} indices The shuffled string indices.
     * @return {string} The shuffled string.
     */
    restoreString(s, indices) {
        if (!this.validateInputParameters(s, indices)) return null;
        const indicesArray = [...indices];
        const stringArray = s.split('');
        const size = indicesArray.length;

        for (let step = 0; step < size - 1; step++) {
            let minValueIndex = step;
            for (let i = step + 1; i < size; i++) {
                if (indicesArray[i] < indicesArray[minValueIndex]) {
                    minValueIndex = i;
                }
            }
            this.swapArray(indicesArray, step, minValueIndex);
            this.swapArray(stringArray, step, minValueIndex);
        }

        return stringArray.join('');
    }

    swapArray(array, step, minValueIndex) {
        const tempArray = array[step];
        array[step] = array[minValueIndex];
        array[minValueIndex] = tempArray;
    }

    validateInputParameters(s, indices) {
        if ((typeof s !== 'string') || !Array.isArray(indices) || (s.length !== indices.length)) {
            console.log('Invalid input parameters. Expecting a string and an integer array indices of the same length.');
            return false;
        }
        return true;
    }
}

module.exports.Solution = Solution;
