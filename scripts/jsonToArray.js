const fs = require('fs');
const path = require('path');

function jsonToArray(jsonString) {
    try {
        const jsonArray = JSON.parse(jsonString);
        if (!Array.isArray(jsonArray)) {
            throw new Error("JSON is not an array");
        }
        return jsonArray;
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return [];
    }
}

function readJsonFromFile(filePath) {
    try {
        const jsonString = fs.readFileSync(filePath, 'utf8');
        return jsonString;
    } catch (error) {
        console.error("Error reading file:", error);
        return null;
    }
}

function writeArrayToJsFile(array, filePath) {
    try {
        const jsContent = `const applicants = ${JSON.stringify(array, null, 2)};\nmodule.exports = applicants;`;
        fs.writeFileSync(filePath, jsContent, 'utf8');
    } catch (error) {
        console.error("Error writing file:", error);
    }
}

// Example usage:
const inputFilePath = path.join(__dirname, '../ratings/applicants.json');
const outputFilePath = path.join(__dirname, '../ratings/applicants.js');

const jsonString = readJsonFromFile(inputFilePath);
if (jsonString) {
    const result = jsonToArray(jsonString);
    writeArrayToJsFile(result, outputFilePath);
    console.log("Conversion complete. Check applicants.js for results.");
}
