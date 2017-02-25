/**
 * Created by Charlie on 11/29/2016.
 */

var returnAnObj = function() {
    var myObj = {};

    myObj.name = "Charlie";
    myObj.hello = function () {
        return "Hello" + myObj.name;
    };

    console.log("test");
    return myObj;
};

console.log(returnAnObj());

