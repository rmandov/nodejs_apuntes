const { Buffer } = require('buffer');

const bufferFromString = Buffer.from("Hello, this is a string :D", "utf8");
console.log(bufferFromString);

// Create buffer with specific size
const bufferAlloc = Buffer.alloc(10);
console.log(bufferAlloc);

bufferAlloc.write("node.js");
console.log(bufferAlloc);

const bufferToString = bufferAlloc.toString("utf8", 0, 7);
console.log(bufferToString);

