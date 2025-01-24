# Project: Decode Password 

This project demonstrates how to decode a password for an Odoo job challenge by analyzing the JavaScript source code and applying the necessary logic to reveal the correct password.

## Steps Taken

### 1. **Analyzing the Source Code**  
We analyzed the JavaScript source code embedded in the page to understand how the password is validated.

- Key variables such as `ts`, `stmnt`, and `multi` were identified as part of the password generation process.
- The value `multi` is calculated by iterating over the first five characters of `ts` and performing a character code multiplication with the string `stmnt` obtained from `getBiskuit('X-Odoo')`.

### 2. **Extracting Relevant Values**  
We ran JavaScript directly in the browser console to extract the following variables:

```javascript
ts = $( "#pwd" ).data('ts') + '';
stmnt = getBiskuit('X-Odoo');
multi = true;

$(ts.substr(0, 5).split('')).each(function(i, j) {
    multi *= stmnt[parseInt(j) + 1].charCodeAt(0);
});
console.log("multi: ", multi);
```

### 3. **Identifying the Last Two Digits of the Password**  
We identified that the last two digits of the password depend on the variables `a` and `b`. These values were calculated using:

```javascript
let a = parseInt(ts.slice(-( --([,,,,undefined].join()).length))[0]);
console.log("a: ", a);
let b = parseInt(ts.slice(-( --([,,,,undefined].join()).length))[1]);
console.log("b: ", b);
```

The possible values for `a` and `b` were `5,7` and `7,5`, which determined the last two digits of the password: **57** or **75**.

### 4. **Constructing the Complete Password**  
The complete password is constructed by combining the calculated `multi` value with the string `stmnt`, and appending the last two digits based on the values of `a` and `b`.

For example:

```javascript
let part1 = multi.toString().substr(1, 4) + stmnt.substring(2, 6);
let part2 = (a === 5 && b === 7) ? "57" : "75";
let password = part1 + part2;
console.log("Complete password: ", password);
```

### 5. **Submitting the Password**  
After constructing the complete password, we used the following AJAX request to submit the password to the server:

```javascript
$.ajax("./70/" + password, {
    success: function (o) {
        if (0 === pwd.lastIndexOf(part1, 0)) {
            $.post("submit", {
                pwd: o,
                csrf_token: "csrf_token_value"
            }).always(function () {
                window.location.href = "/jobs/challenge/next";
            });
        }
    },
    error: function () {
        console.error("To be or not to be...");
    }
});
```

### 6. **Final Result**  
Upon submitting the correct password, the server redirected to the next challenge in the process.

## Result
The decoded password for the Odoo challenge was either `4380Odoo57` or `4380Odoo75` depending on the value of `a` and `b`.

## How to Run

1. Open the browser developer tools (F12) on the Odoo job challenge page.
2. Use the browser console to run the JavaScript snippets provided to extract the necessary values.
3. Construct the full password by combining the extracted parts.
4. Submit the password via AJAX using the provided script.
5. Once successful, you will be redirected to the next challenge.

## Output
- The final password will either be `4380Odoo57` or `4380Odoo75`, depending on the value of `a` and `b`.

