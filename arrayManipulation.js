// arrayManipulation.js

function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        const num = numbers[index];
        return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Example usage:
const inputStrings = ["hello", "world", "JavaScript", "is", "awesome"];
const inputNumbers = [1, 2, 3, 4, 5];

const processedNumbers = processArray(inputNumbers);
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);

console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]
console.log(formattedStrings); // Output: ['hello', 'WORLD', 'javascript', 'IS', 'awesome']
