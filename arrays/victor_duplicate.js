const fs = require('fs');

let rawdata = fs.readFileSync('test.json');
let student = JSON.parse(rawdata);
console.log(student.length);