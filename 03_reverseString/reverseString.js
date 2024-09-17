const reverseString = function(string) {
    let arrayOfRevChar = string.split('').reverse()
    let reversedString = arrayOfRevChar.join('')
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

reverseString("hello");
