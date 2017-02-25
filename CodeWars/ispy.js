// In testing, a spy function is one that keeps track of various metadata regarding its 
//invocations. Some examples of properties that a spy might track include:

// Whether it was invoked
// How many times it was invoked
// What arguments it was called with
// What contexts it was called in
// What values it returned
// Whether it threw an error

function adder(n1, n2) { return n1 + n2; }

function spyOn(funcOrig) {
    let origFunc = funcOrig;
    let func;
    let callCounter = 0;
    let spyArgs = [];
    let spyVals = [];


    func = function() {
        //Check number of times called
        callCounter++;

        //Check which arguments it was called with
        for (let i = 0; i < arguments.length; i++) {
            spyArgs.push(arguments[i]);
        }

        //Check which return values it was called with
        let returnedValue = origFunc(...arguments);
        spyVals.push(returnedValue);

        //Get original function's results
        return origFunc.apply(func, arguments);
    }

    //These methods return the spy values back
    func.callCount = function() {
        return callCounter;
    }

    func.wasCalledWith = function(num) {
        if (spyArgs.indexOf(num) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    func.returned = function(num) {
        if (spyVals.indexOf(num) !== -1) {
            return true;
        } else {
            return false;
        }
    }

   return func;
}



var adderSpy = spyOn( adder );
//console.log(adderSpy);

console.log(adderSpy(2, 4));
console.log(adderSpy(2, 4));
console.log(adderSpy(2, 5));

console.log("----------------");
//console.log(adderSpy.callCount());
//console.log(adderSpy.wasCalledWith(0));
console.log(adderSpy.returned(6));
