const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('Chatbot_Query_Axes.xlsx');


const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(worksheet);

const questions = jsonData.map(row => row["Sample Questions"]).filter(Boolean);


fs.writeFileSync('questions.json', JSON.stringify(questions, null, 4), 'utf-8');

console.log("Questions extracted and saved to questions.json");
