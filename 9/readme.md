### Project: Convert Base64 Blob to an Image

This project demonstrates how to take a base64-encoded blob stored in a file, decode it, and save it as an image. Additionally, the resulting image is a QR code that, when scanned, reveals a password.

#### Steps Taken:

1. **Base64 Blob Preparation:**
   - The base64 blob is stored in a file named `image.txt`.

2. **Script Creation:**
   - A Node.js script is created to:
     - Read the base64 blob from `image.txt`.
     - Decode the base64 string into binary data.
     - Save the binary data as an image file.

3. **Implementation Details:**
   - The base64 blob is decoded using Node.js's `Buffer` API.
   - The resulting buffer is written to a file with a `.png` extension.

4. **Result:**
   - The output file, `output_image.png`, contains the decoded image.
   - The image is a QR code.

#### Script Example:
```javascript
const fs = require('fs');

// Read the base64 blob from the file
fs.readFile('image.txt', 'utf-8', (err, base64Blob) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Convert base64 to a buffer
    const buffer = Buffer.from(base64Blob, 'base64');

    // Write the buffer to an image file
    fs.writeFile('output_image.png', buffer, (err) => {
        if (err) {
            console.error('Error writing the image:', err);
            return;
        }
        console.log('Image saved as output_image.png');
    });
});
```

#### Running the Project:
1. Save the base64 blob in `image.txt`.
2. Create the script `convert.js` with the code above.
3. Run the script:
   ```bash
   node convert.js
   ```
4. The resulting image file, `output_image.png`, will be created in the same directory.

#### Output:
- The resulting image is a QR code that, when scanned, reveals a password.