function addNumbers(even) {
	console.log(arguments);

	var newArray = Array.prototype.slice.call(arguments, 1);
	console.log(newArray);
	var sum = 0;

	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}

	return sum;
}

console.log(addNumbers(true, 1,2,3,4,5));

