// This script checks the password by converting each character into its index position from a list of possible characters
// and compares the generated index string with a predefined string to determine if the password is correct.

var idx = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // List of all possible characters: digits, lowercase, and uppercase letters
var tmp = ""; // This will store the generated index string
var pwd = ""; // This is the initial password (you can change this value)
//var pwd = "E7E81cdb62E6D9B8296a"; // solution

// Loop through each character in the password `pwd` and find its index in `idx`
for (var i = 0; i < pwd.length; i++) {
    // For each character in `pwd`, find its index in `idx` and add it to `tmp`
    tmp += " " + idx.indexOf(pwd.charAt(i));
}

// Here is the predefined string of index positions we're comparing against
// Each index corresponds to the position of a character in the `idx` array
if (tmp == " 40 7 40 8 1 12 13 11 6 2 40 6 39 9 37 8 2 9 6 10") {
    // If the generated `tmp` matches the expected index string, submit the password
    $.post('/jobs/challenge/submit', { pwd: pwd }).always(function (x) {
        window.location = '/jobs/challenge/next'; // After submission, move to the next challenge
    });
}

// Print the generated index string for debugging
console.log(tmp);
