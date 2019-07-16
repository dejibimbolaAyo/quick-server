/**
 * Generate random string (numeral and alphabets) of different length
 * @param length
 */
exports.generateRandom = (length) => {
    // Get the current time
    var randomString = '';
    for (var i = 0; i < length; i++)
        randomString += Date.now().toString().charAt(Math.floor(Math.random() * Date.now().toString().length))
    return randomString;
}