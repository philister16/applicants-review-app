const XLSX = require('xlsx');
const fs = require('fs');

// Function to convert Excel to JSON and save to disk
function convertExcelToJSON(inputExcelFile, outputJSONFile) {
    try {
        // Read the Excel file
        const workbook = XLSX.readFile(inputExcelFile);

        // Get the first worksheet
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        // Convert to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Convert JSON object to string with pretty formatting
        const jsonString = JSON.stringify(jsonData, null, 2);

        // Write JSON to file
        fs.writeFileSync(outputJSONFile, jsonString);

        console.log(`Successfully converted ${inputExcelFile} to ${outputJSONFile}`);
        return jsonData;
    } catch (error) {
        console.error('Error converting Excel to JSON:', error);
    }
}

// Usage
convertExcelToJSON('ratings/applicants.xlsx', 'ratings/applicants.json');