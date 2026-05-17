// Basics methods for outputs

console.log("Hello world");

console.info("Console.info(): Similar to .log() but this is to show information");

console.warn("Console.warn(): This is for cautions");

console.error("Console.error(): For errors");


// Tables

const users = [
    {name: "user_01", age: 21, rol: "developer"},
    {name: "user_02", age: 22, rol: "designer"},
    {name: "user_03", age: 23, rol: "writer"},
];

console.log(users);
console.table(users);
console.table(users, ["name", "rol"]);

// Time
console.time('Operation');
for (let i =0; i<1000000;i++){
    // consume time
}
console.timeEnd('Operation')


// Counter
console.count("contador");
console.count("contador");
console.count("contador");
console.count("contador");
console.count("contador");
console.count("contador");
console.countReset("contador");

for (let i =0; i<10;i++){
    console.count("contador")
}
console.countReset("contador");

// Agrupación
console.group("Grupo principal");

console.log("Información 1");

console.group("Subgrupo");
console.log("Información subgrupo 1");
console.groupEnd();

console.group("Subgrupo 2");
console.log("Información subgrupo 2");
console.groupEnd();

console.log("final");


console.groupEnd();


// Afirmaciones

console.assert( 1===1, "Esto no se muestra");
console.assert( 1===2, "Esto se muestra");

// Clear

/* console.clear(); */

// trace

console.trace('Mostrar la pila de llamadas actual');

