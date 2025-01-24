### Project: Extracting Password from JSON

In this challenge, we worked through multiple steps to extract a password from a JSON file using specific operations, including prime number filtering, bitwise shifts, and ASCII conversions.

#### Steps Taken:

1. **Locating the JSON File:**
   - We identified the URL structure for accessing the `prime.json` file using patterns:
     ```
     Part 1 of URL: /jobs/challenge/019/<part2>/prime.json
     Part 2 of URL: /jobs/challenge/<part1>/b07/prime.json

     Final URL: /jobs/challenge/019/b07/prime.json
     ```
   - Using the above, we obtained the `prime.json` file.

2. **Understanding the Challenge:**
   - The JSON contained a list of numbers, and the task required extracting certain numbers based on specific criteria:
     - Check for prime numbers.
     - Perform a right bit-shift operation.
     - Convert the shifted numbers into ASCII characters to form a password.

3. **Script Implementation:**
   - **Prime Number Filter:**
     We implemented a function to determine if a number is prime:
     ```javascript
     function isPrime(num) {
         if (num <= 1) return false;
         for (let i = 2; i <= Math.sqrt(num); i++) {
             if (num % i === 0) return false;
         }
         return true;
     }
     ```

   - **Bitwise Right Shift:**
     We used the right shift operator to divide prime numbers by 256 (8 bits):
     ```javascript
     function rightShift(num, shiftBits) {
         return Math.floor(num / Math.pow(2, shiftBits));
     }
     ```

   - **Conversion to ASCII:**
     After shifting, we mapped the resulting numbers to ASCII characters:
     ```javascript
     const asciiPassword = shiftedPrimes.map(num => String.fromCharCode(num % 256)).join('');
     ```

4. **Digit Position in Pi:**
   - The digit position (101) was relevant for the bit-shifting step, as the corresponding value was 8 (since 101 is 8 bits).
   - We used [this tool](https://calculat.io/en/number/digit-of-pi) to confirm that the 101st digit in Pi is 8.

5. **Generated Password:**
   - The script extracted the following ASCII password:
     ```
     f062511400881265efc0bf166dfd9504badd3e98
     ```

#### Technologies Used:
- **Node.js** for implementing the logic.
- **Regular expressions** for parsing JSON.
- **Mathematical operations** for filtering primes and performing bitwise shifts.

#### Running the Project:
1. Save the JSON data into a file called `prime.json`.
2. Run the script using Node.js:
   ```bash
   node prime.js
   ```
3. The output will include the shifted prime numbers and the generated ASCII password.

#### Script Output:
```bash
Generated ASCII Password: f062511400881265efc0bf166dfd9504badd3e98
```

