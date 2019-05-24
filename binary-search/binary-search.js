'use strict';

// Complete this algo
const binarySearch = (array, target, head, tail) => {
	if (head === undefined) head = 0;
	if (tail === undefined) tail = array.length - 1;
	// console.log(head, tail);
	if (Math.abs(head - tail) <= 1) {
		if (array[head] === target || array[tail] === target) {
			return true;
		} else {
			return false;
		}
	}
	const midpoint = Math.ceil((tail - head) / 2) + head;
	if (target > array[midpoint]) {
		return binarySearch(array, target, midpoint, tail);
	} else if (target < array[midpoint]) {
		return binarySearch(array, target, head, midpoint);
	} else {
		return true;
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
