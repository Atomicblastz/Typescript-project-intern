export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    // Declare initial variables
    const mergedCollection: number[] = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < collection1.length || j < collection2.length || k < collection3.length) {
        const value1 = i < collection1.length ? collection1[i] : Number.POSITIVE_INFINITY;
        const value2 = j < collection2.length ? collection2[j] : Number.POSITIVE_INFINITY;
        const value3 = k < collection3.length ? collection3[k] : Number.POSITIVE_INFINITY;

        // Find the minimum value among these 3 values
        const minValue = Math.min(value1, value2, value3);

        // Increment the index of the array from the minimum values
        if (minValue === value1) {
            i++;
        } else if (minValue === value2) {
            j++;
        } else {
            k++;
        }

        // Find and rearrange duplicates
        if (minValue === value1) {
            while (i < collection1.length && collection1[i] === minValue) {
                i++;
            }
        }

        if (minValue === value2) {
            while (j < collection2.length && collection2[j] === minValue) {
                j++;
            }
        }

        if (minValue === value3) {
            while (k < collection3.length && collection3[k] === minValue) {
                k++;
            }
        }
    }

    return mergedCollection;
}
