import { merge } from '../src/merge';

describe('merge function', () => {
    it('should merge the 3 sorted arrays with ascending order', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const collection3 = [6, 4, 2];
        const result = merge(collection1, collection2, collection3);

        expect(result).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6]);
    });

    it('should merge the 3 sorted arrays with descending order', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const collection3 = [6, 4, 2];
        const result = merge(collection1, collection2, collection3);

        expect(result).toEqual([6, 6, 5, 4, 4, 3, 2, 2, 1]);
    });

    it('should handle arrays with different lengths', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const collection3 = [8, 6];
        const result = merge(collection1, collection2, collection3);

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 6, 8]);
    });

    it('should handle arrays with duplicate elements', () => {
        const collection1 = [3, 3, 5];
        const collection2 = [2, 4, 4];
        const collection3 = [6, 4, 2];
        const result = merge(collection1, collection2, collection3);

        expect(result).toEqual([2, 2, 3, 3, 4, 4, 4, 5, 6]);
    });
});
