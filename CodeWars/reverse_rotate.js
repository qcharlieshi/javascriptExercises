// The input is a string str of digits. Cut the string into chunks of size sz 
// (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits 
// is divisible by 2, reverse it; otherwise rotate it to the left by one position. 
// Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""

function revrot(str, sz) {
    //Conditions
    if(sz <= 0 || str.length <= 0) { return ''; }
    if(sz > str.length) { return ''; }


    var numChunks = Math.floor((str.length / sz));
    var chunkLength = sz;
    var newString = '';

    for(var i = 0; i < numChunks; i++ ) {
        var start = i * chunkLength;
        var end = (i + 1) * chunkLength;
        var tempString = str.slice(start, end);
        //console.log(tempString + " temp");

       // console.log(checkChunk(tempString) + " t/f");
        if(checkChunk(tempString)) { 
            //console.log(tempString);
            newString += reverse(tempString);
        } else {
            //console.log(tempString + " tempString");
            newString += rotate(tempString);
            //console.log(newString + " newString");
        }
    }
    
    return newString;
}

function checkChunk(digits) {
    var sum = 0;

    for(var i = 0; i < digits.length; i++) {
        console.log(digits[i] + " Digit at " + i);
        sum += Math.pow(digits[i], 3);
    }

    console.log(sum + " sum");

    return (sum % 2 == 0); 
}

function reverse(str) {
    var newString = '';

    for(var i = str.length; i > 0; i--) {
        newString += str[i];
    }

    return newString;
}

function rotate(str) {
    var newString = str.slice(1, str.length)
    newString += str[0];
    return newString;
}


//revrot("123456987654", 6) --> "234561876549"

//console.log(revrot("123456987654", 6));
console.log(checkChunk("72815"));

//33047
//91089
//28157

//73304
//99108
//72815

