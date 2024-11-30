/**
 * Function to reverse a string.
 * @param {string} str - The input string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    // Convert the string to an array, reverse it, and join it back to a string
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 
// Output: "olleh"