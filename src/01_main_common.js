/* Using Common JS 

node src/01_main_math.js

!! Important:

Delete: "type": "module" in order to run this file

*/

const math = require('./01_math');

console.log(`Sumar: ${math.add(1, 3)}`);
console.log(`Restar: ${math.substract(4, 1)}`);
