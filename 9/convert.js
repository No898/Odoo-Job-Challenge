const fs = require('fs');

// Read the base64 blob from the file
fs.readFile('./image.txt', 'utf-8', (err, base64Blob) => {
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
