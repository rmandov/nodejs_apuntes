const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, '03_example.txt')

const data = fs.readFileSync(filePath, 'utf-8');

console.log('file content:', data);
