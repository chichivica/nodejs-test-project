const path = require('path');
const fs = require('fs');

let full_path = path.basename("tests/bin-search.js");

console.log(full_path);


let result = fs.readdirSync("/home/chichivica/Projects/__TestingProject/tests");



console.log(result);
console.log(fs.lstatSync("/home/chichivica/Projects/__TestingProject/tests/bin-").isDirectory());
process.exit(0);