function duplicateCount(text){
	var charTracker = {}
	for (var i = 0; i < text.length; i++) {
		if (charTracker[text.charAt(i).toLowerCase()] === undefined) {
			charTracker[text.charAt(i).toLowerCase()] = 1;
		} else {
			charTracker[text.charAt(i).toLowerCase()] += 1;
		}
	}

	//console.log(charTracker)

	var finalValue = 0
	for (var index in charTracker) {
		if (charTracker[index] >= 2) {

			finalValue += 1
		}
	}

	return finalValue
}

console.log(duplicateCount("aabBcde"))