// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to right shift a number by 7 bits (equivalent to dividing by 128)
function rightShift(num, shiftBits) {
    return Math.floor(num / Math.pow(2, shiftBits));
}

// List of numbers from json
const numbers = [
    26227, 9192, 12539, 15406, 78, 46981, 14029, 12841, 13627, 10783, 23541, 12739, 5609, 27578, 3692, 12087,
    12739, 47878, 13477, 30819, 62356, 34937, 65039, 51456, 11511, 12409, 12541, 14503, 59595, 39505, 57555, 36323,
    61839, 14437, 10569, 12637, 40375, 12809, 53716, 14009, 13679, 45049, 25873, 58404, 49690, 3226, 50995, 34594,
    26293, 40207, 27531, 25589, 12379, 25309, 29735, 40613, 26267, 39072, 12743, 28975, 30670, 46749, 42502, 13903,
    58333, 57743, 4150, 26639, 40138, 36782, 13021, 57822, 31279, 13829, 57734, 44352, 16085, 59854, 61053, 59133,
    25601, 56648, 10471, 56043, 417, 43844, 38216, 55180, 40619, 45190, 26113, 25717, 14731, 13577, 47651, 31969,
    12413, 44946, 13553, 27447, 18294, 29740, 26915, 7914, 22022, 25189, 14844, 27840, 24919, 22952, 25747, 614,
    1790, 40919, 64701, 56010, 42766, 59839, 25717, 32412, 50137, 49353, 38773, 51340, 674, 13259, 54882, 24158,
    37154, 13107, 23846, 26029, 6024, 28306, 14843, 49677, 26087, 12906, 58047, 45430, 19972, 51364, 40182, 4023,
    9564, 57184, 30876, 54821, 12048, 44614, 121, 29869, 14431
];

// Filter out non-prime numbers
const primes = numbers.filter(isPrime);

// Right shift the remaining primes by 8 bits (8 is 101 digit position in pi)
const shiftedPrimes = primes.map(num => rightShift(num, 8));

// Convert the shifted numbers to ASCII characters
const asciiPassword = shiftedPrimes.map(num => String.fromCharCode(num % 256)).join('');

// Output the shifted numbers and the ASCII password
console.log("Shifted Primes:", shiftedPrimes);
console.log("Generated ASCII Password:", asciiPassword);
/*   
    102,  48, 54,  50, 53, 49, 49,  52,  48,
   48,  56, 56,  49, 50, 54, 53, 101, 102,
   99,  48, 98, 102, 49, 54, 54, 100, 102,
  100,  57, 53,  48, 52, 98, 97, 100, 100,
   51, 101, 57,  56
]
Generated ASCII Password: f062511400881265efc0bf166dfd9504badd3e98
*/