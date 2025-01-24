const fs = require('fs');

// Read the file (element.html) from the same directory
fs.readFile('./element.html', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Extract content between `>` and `<`, excluding `#`
    const result = [];
    const regex = />([^<]*)</g; // Match all text between `>` and `<`

    let match;
    while ((match = regex.exec(data)) !== null) {
        const content = match[1].replace(/#/g, '').trim(); // Remove `#` and trim whitespace
        if (content) {
            result.push(content); // Add non-empty content to the result
        }
    }

    // Join all extracted characters into a single string
    const finalString = result.join('');
    console.log(finalString);
});
/* Password:'97d7d6c4978fe94c2213b889c5849928d2824bf9' */