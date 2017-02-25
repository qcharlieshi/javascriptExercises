// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6


// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note: In C++ instead null an empty vector is used. In C there is no null. ;-) 


function sumArray(array) {
	var highest = 0;
	var lowest = 1000;

	var sum = 0;

	if (array != null && array.length > 1) {
		for (var i = 0; i < array.length; i++) {
			sum += array[i];

			if (array[i] > highest) {
				highest = array[i];
			}

			if (array[i] < lowest) {
				lowest = array[i];
			}
		}
	} else {
		return 0;
	}

	subtractValue = highest + lowest;

	if (sum < 0) {
		return (sum - subtractValue) + 1;
	} else {
		return (sum - subtractValue);
	}
	

}


console.log(sumArray([ 6, 2, 1, 8, 10 ]));
