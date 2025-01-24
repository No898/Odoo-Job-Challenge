/* 
      // JS
      r = function(pwd, fr, to, by) {
          return _.map(
            _.range(fr, to, by), function(i) { return pwd[i] }
          ).join('');
      }
      print = console.log

      // PYTHON
      >>> def r(pwd, fr, to, by):
      ...     return ''.join([pwd[i] for i in range(fr, to, by)])
    
Output:
      
>>> print(r(pwd, 0, 4, 1))
885e
>>> print(r(pwd, 4, 20, 2))
adc3112c
>>> print(r(pwd, 5, 30, 3))
8c21fba1e
>>> print(r(pwd, 5, 40, 4))
871fdee77
>>> print(r(pwd, 6, 40, 6))
d1c365
>>> print(r(pwd, 7, 8, 1))
5
>>> print(r(pwd, 10, 40, 3))
312c4ed877
>>> print(r(pwd, 10, 40, 5))
36be65
>>> print(r(pwd, 15, 40, 6))
6d47e
>>> print(r(pwd, 20, 40, 3))
ba1e15d */


// Create an array of length 40, initialized with empty strings
let _pwd = new Array(40).fill("");

// Decrypt function
function decrypt(text, fr, to, by) {
    // Iterate over the range and place characters in the correct positions
    for (let i = 0, j = fr; j < to; i++, j += by) {
        _pwd[j] = text[i];
    }
}

// Execute decryptions with the provided outputs
decrypt("885e", 0, 4, 1);
decrypt("adc3112c", 4, 20, 2);
decrypt("8c21fba1e", 5, 30, 3);
decrypt("871fdee77", 5, 40, 4);
decrypt("d1c365", 6, 40, 6);
decrypt("5", 7, 8, 1);
decrypt("312c4ed877", 10, 40, 3);
decrypt("36be65", 10, 40, 5);
decrypt("6d47e", 15, 40, 6);
decrypt("ba1e15d", 20, 40, 3);

// Join the array to get the password
let password = _pwd.join("");
console.log(password);  // This will print the decoded password
