// CRUD with fs module

const fs = require('fs');
const path = require('path')

const fileName = path.join(__dirname, '05_example.txt');

// Create
fs.writeFileSync(fileName, "Hello, this is a example file.\n");
console.log("File created succesfully!");

//Read
const content = fs.readFileSync(fileName, 'utf8');
console.log("File content:", content);

//Update
fs.appendFileSync(fileName, "This is a new line.\n");

const new_content = fs.readFileSync(fileName, 'utf8');
console.log("File updated:", new_content);

// Delete
/* fs.unlinkSync(fileName); */
console.log("File deleted succesfully");


